// routes/coffeeRoutes.js
const express = require("express");
const router = express.Router();
const coffeeController = require("../controllers/coffeeController");

// Render the coffee form with coffee types
router.get("/new", coffeeController.showNewCoffeeForm);

// Edit coffee form
router.get("/:id/edit", coffeeController.showEditCoffeeForm);
router.post("/:id/delete", coffeeController.deleteAllCoffee);

// Define other routes
router.get("/", coffeeController.allCoffee);
router.get("/:id", coffeeController.coffeeById);
router.post("/", coffeeController.createAllCoffee);

router.put("/:id/edit", coffeeController.updateAllCoffee);
// router.delete("/:id", coffeeController.deleteAllCoffee);

module.exports = router;
