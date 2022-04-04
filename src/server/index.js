require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8888;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/build"));

app.get("/", (req, res) => {
  res.send("welcome hehehe");
});
app.listen(PORT, console.log(`Listing PORT ${PORT}`));
