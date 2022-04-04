require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8888;
const db = require("../server/db.js");
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/build"));

app.get("/all", async (req, res) => {
  const all = await db.select("*").from("cologne");
  res.send(all);
});
app.listen(PORT, console.log(`Listing PORT ${PORT}`));
