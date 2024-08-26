// routes/coffeeTypeRoutes.js
const express = require("express");
const router = express.Router();
const typesController = require("../controllers/typesController");

// New route to render coffee type form
router.get("/new", (req, res) => {
  res.render("coffee-type-form", { coffeeType: null });
});

// Edit coffee type form
router.get("/:id/edit", typesController.showEditCoffeeTypeForm);
router.post("/:id/delete", typesController.deleteCoffeeType);

router.get("/", typesController.getAllCoffeeTypes);
router.get("/:id", typesController.getCoffeeTypeById);
router.post("/", typesController.createCoffeeType);

router.post("/:id/edit", typesController.updateCoffeeType);
// router.delete("/:id", typesController.deleteCoffeeType);

module.exports = router;
