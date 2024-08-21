// routes/coffeeRoutes.js
const express = require("express");
const router = express.Router();
const coffeeController = require("../controllers/coffeeController");

router.get("/", coffeeController.allCoffee);
router.get("/:id", coffeeController.coffeeById);
router.post("/", coffeeController.createAllCoffee);
router.put("/:id", coffeeController.updateAllCoffee);
router.delete("/:id", coffeeController.deleteAllCoffee);

module.exports = router;
