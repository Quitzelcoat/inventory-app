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
  res.redirect("/coffees/types");
};

exports.showEditCoffeeTypeForm = async (req, res) => {
  const { id } = req.params;
  const coffeeType = await getCoffeeTypeById(id);
  res.render("coffee-type-form", { coffeeType }); // Render the coffee type form with current data
};

// Update a coffee type
exports.updateCoffeeType = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  await updateCoffeeType(id, name, description);
  res.redirect("/coffees/types");
};

// Delete a coffee type
exports.deleteCoffeeType = async (req, res) => {
  const { id } = req.params;
  await deleteCoffeeType(id);
  res.send("Coffee type deleted successfully");
};
