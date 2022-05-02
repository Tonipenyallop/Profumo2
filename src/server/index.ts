require("dotenv").config();
import express, { Application, Request, Response, NextFunction } from "express";
const cors = require("cors");
const app: Application = express();
const PORT = process.env.PORT || 8888;
const db = require("../server/db.ts");
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
app.listen(PORT, () => console.log(`Listing PORT ${PORT}`));
