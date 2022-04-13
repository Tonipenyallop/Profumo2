require("dotenv").config();
import express from "express";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8888;
import db from '../server/db'
// const db = require("../server/db.ts");
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/build"));

app.get("/all", async (req ,res)  =>  {
  const all = await db.select("*").from("cologne");
  res.send(all);
});
app.listen(PORT, () => console.log(`Listing PORT ${PORT}`));
