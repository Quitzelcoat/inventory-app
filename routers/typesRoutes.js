// routes/coffeeTypeRoutes.js
const express = require("express");
const router = express.Router();
const typesController = require("../controllers/typesController");

// New route to render coffee type form
router.get("/new", (req, res) => {
  res.render("coffee-type-form");
});

router.get("/", typesController.getAllCoffeeTypes);
router.get("/:id", typesController.getCoffeeTypeById);
router.post("/", typesController.createCoffeeType);
router.put("/:id", typesController.updateCoffeeType);
router.delete("/:id", typesController.deleteCoffeeType);

module.exports = router;
