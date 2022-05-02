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

app.post("/create-checkout-session", async (req, res) => {
  console.log("get the req");
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.redirect(303, session.url);
});

app.listen(PORT, () => console.log(`Listing PORT ${PORT}`));
