// routes/coffeeRoutes.js
const express = require("express");
const router = express.Router();
const coffeeController = require("../controllers/coffeeController");

// New route to render coffee form
router.get("/new", (req, res) => {
  res.render("coffee-form");
});

router.get("/coffees/new", coffeeController.createCoffeeForm);
router.post("/coffees", coffeeController.createCoffeeForm);

router.get("/", coffeeController.allCoffee);
router.get("/:id", coffeeController.coffeeById);
router.post("/", coffeeController.createAllCoffee);
router.put("/:id", coffeeController.updateAllCoffee);
router.delete("/:id", coffeeController.deleteAllCoffee);

module.exports = router;
