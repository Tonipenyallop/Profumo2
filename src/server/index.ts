require("dotenv").config();
import express, { Application, Request, Response, NextFunction } from "express";
const cors = require("cors");
const app: Application = express();

const PORT = process.env.PORT || 8888;
const db = require("../server/db.ts");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/build"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/all", async (_: Request, res: Response) => {
  const all = await db.select("*").from("top");
  res.send(all);
});

app.get("/summer-all", async (_: Request, res: Response) => {
  const all = await db.select("*").from("summer");
  res.send(all);
});
app.get("/winter-all", async (_: Request, res: Response) => {
  const all = await db.select("*").from("winter");
  res.send(all);
});

app.post("/address", async (req: Request, res: Response) => {
  let address = await db
    .select("address")
    .from("users")
    .where("email", req.body.email);
  address = address[0].address;
  res.send(address);
});

app.post("/sign-up", async (req: Request, res: Response) => {
  try {
    const user = req.body;
    let isAlreadyUser: boolean;

    const email = await db.select("*").from("users").where("email", user.email);
    isAlreadyUser = email.length >= 1 ? true : false;

    if (!isAlreadyUser) {
      await db("users").insert(req.body);
      res.send("success").status(200);
    } else {
      res.send("already user");
    }
  } catch (err) {
    res.send(err).status(500);
  }
});

app.post("/login", async (req: Request, res: Response) => {
  console.log(req.body);
  const user = await db
    .select("email", "password")
    .from("users")
    .where("email", req.body.email)
    .andWhere("password", req.body.password);
  console.log("user", user);
  if (user.length === 0) res.send("fail");
  else if (user.length === 1) res.send("success");
});

app.post("/order", async (req: Request, res: Response) => {
  try {
    const orderNumber = await db.select("order_number").from("orders");
    if (orderNumber.length >= 1) res.send("already added");
    else {
      const item = req.body;
      await db("orders").insert({
        email: item.email,
        order_number: item.order_number,
        items: item.item,
      });
      console.log("successfully insert new data");
      res.send("success");
    }
  } catch (err) {
    res.send({ err });
  }
});

app.post("/create-checkout-session", async (req: Request, res: Response) => {
  const cart = req.body.cart;
  const parsedCart = JSON.parse(cart);

  let checkoutItems: any = [];
  const products = await stripe.products.list({
    limit: 20,
  });

  const productsData = products["data"];

  productsData.forEach((e: any) => {
    for (let key in parsedCart) {
      if (e.name === key) {
        const item = {
          price_data: {
            currency: "eur",
            product_data: {
              name: e.name,
              images: e.images,
            },
            unit_amount: parseInt(parsedCart[key].price.split("€")[1]) * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
          },
          quantity: parsedCart[key].quantity,
        };
        checkoutItems.push(item);
      }
    }
  });

  const session = await stripe.checkout.sessions.create({
    line_items: checkoutItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  res.redirect(303, session.url);
});

app.listen(PORT, () => console.log(`Listing PORT ${PORT}`));
