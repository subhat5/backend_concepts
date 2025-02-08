require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const myJsonData = {
  name: "subhajit",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("subhajitcom");
});
app.get("/login", (req, res) => {
  res.send("<h1>please login at me</h1>");
});
app.get("/subhajit", (req, res) => {
  res.json(myJsonData);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
