require("dotenv").config();
import express, {Application, Request, Response, NextFunction} from "express";
const cors = require('cors')
const app: Application = express();
const PORT = process.env.PORT || 8888;
const db = require("../server/db.ts");
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/build"));

app.get("/all", async (_: Request ,res: Response)  =>  {
  const all = await db.select("*").from("cologne");
  res.send(all);
});
app.listen(PORT, () => console.log(`Listing PORT ${PORT}`));
