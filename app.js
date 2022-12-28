const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const { readFileSync } = require("fs");

app.engine("handlebars", engine());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

const data = JSON.parse(readFileSync("./data/data.json", "utf-8"));

app.get("/", (req, res) => {
  res.redirect("home");
});

app.get("/home", (req, res) => {
  res.render("home", { data });
});

app.get("/home/:Id", (req, res) => {
  const Id = req.params.Id;
  const detail = data.filter((el) => el.id == Id);
  res.render("home", { detail });
});

app.get("/home/search", (req, res) => {
  const search = req.query.str;
  const datab = data.filter((element) => {
    const { title } = element;
    return title.toLowerCase().includes(search);
  });
  res.render("partials/game", { data: datab });
});

app.listen(3000);
