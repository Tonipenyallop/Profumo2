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

// stripe.confirmCardPayment().then(function (response: any) {
//   if (response.error) {
//     // Handle error here
//   } else if (
//     response.paymentIntent &&
//     response.paymentIntent.status === "succeeded"
//   ) {
//     // Handle successful payment here
//   }
// });

app.listen(PORT, () => console.log(`Listing PORT ${PORT}`));
