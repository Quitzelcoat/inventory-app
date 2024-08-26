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
  res.redirect("/coffee-types");
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
  const coffeeTypeId = parseInt(id, 10); // Convert to integer
  console.log(
    `Updating coffee type with ID: ${coffeeTypeId}, Name: ${name}, Description: ${description}`
  );
  await updateCoffeeType(coffeeTypeId, name, description);
  res.redirect("/coffee-types");
};

// Delete a coffee type
exports.deleteCoffeeType = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteCoffeeType(id);
    res.send("Coffee type deleted successfully");
  } catch (error) {
    if (error.code === "23503") {
      res
        .status(400)
        .send(
          "Cannot delete this coffee type because it is still in use by existing coffee records."
        );
    } else {
      // Handle other errors
      console.error(error);
      res
        .status(500)
        .send("An error occurred while trying to delete the coffee type.");
    }
  }
};
