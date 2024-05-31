const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const app = express();
const port = 3000;
const db = require("./config/db");

// Connect db
db.connect();

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method')) // override method PUT, DELETE

// app.use(morgan("combined"));

// template enginee
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
console.log("PATH", path.join(__dirname, "resources", "views"));

route(app);

// test
app.listen(port, () => {
  console.log(`App listening on port https:/localhost/${port}`);
});
