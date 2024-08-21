const {
  getAllCoffeeTypes,
  getCoffeeTypeById,
  createCoffeeType,
  updateCoffeeType,
  deleteCoffeeType,
} = require("../db/quries");

// Get all coffee types
exports.getAllCoffeeTypes = async (req, res) => {
  const coffeeTypes = await getAllCoffeeTypes();
  res.render("coffee-types", { coffeeTypes });
};

// Get a single coffee type by ID
exports.getCoffeeTypeById = async (req, res) => {
  const { id } = req.params;
  const coffeeType = await getCoffeeTypeById(id);
  res.render("coffee-type-detail", { coffeeType });
};

// Create a new coffee type
exports.createCoffeeType = async (req, res) => {
  const { name, description } = req.body;
  const newCoffeeType = await createCoffeeType(name, description);
  res.status(201).json(newCoffeeType);
};

// Update a coffee type
exports.updateCoffeeType = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const updatedCoffeeType = await updateCoffeeType(id, name, description);
  res.json(updatedCoffeeType);
};

// Delete a coffee type
exports.deleteCoffeeType = async (req, res) => {
  const { id } = req.params;
  const deletedCoffeeType = await deleteCoffeeType(id);
  res.send("Coffee type deleted successfully");
};
