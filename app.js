const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const coffeeRoutes = require("./routers/coffeeRoutes");
const typesRoutes = require("./routers/typesRoutes");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/coffees", coffeeRoutes);
app.use("/coffee-types", typesRoutes);

// Home route
app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
