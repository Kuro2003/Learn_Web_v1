const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
app.use(morgan("combined"));

// template enginee
app.engine("hbs", handlebars.engine({
  extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
console.log('PATH', path.join(__dirname, "resources/views"));

// test route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

// test
app.listen(port, () => {
  console.log(`Example app listening on port https:/localhost/${port}`);
});
