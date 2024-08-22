const {
  getAllCoffee,
  getCoffeeById,
  createCoffee,
  updateCoffee,
  deleteCoffee,
  getAllCoffeeTypes,
} = require("../db/quries");

exports.allCoffee = async (req, res) => {
  const coffees = await getAllCoffee();
  res.render("coffee", { coffees });
};

exports.coffeeById = async (req, res) => {
  const { id } = req.params;
  const coffee = await getCoffeeById(id);
  res.render("coffee-detail", { coffee });
};

exports.createCoffeeForm = async (req, res) => {
  try {
    const coffeeTypes = await getAllCoffeeTypes(); // Fetch coffee types
    res.render("coffee-form", { coffeeTypes }); // Pass coffee types to the form
  } catch (error) {
    console.error("Error fetching coffee types:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.createAllCoffee = async (req, res) => {
  const { name, description, price, quantity, coffee_type_id } = req.body;
  const newCoffee = await createCoffee(
    name,
    description,
    price,
    quantity,
    coffee_type_id
  );
  res.status(201).json(newCoffee);
};

exports.updateAllCoffee = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity, coffee_type_id } = req.body;
  const updatedCoffee = await updateCoffee(
    id,
    name,
    description,
    price,
    quantity,
    coffee_type_id
  );

  res.json(updatedCoffee);
};
exports.deleteAllCoffee = async (req, res) => {
  const { id } = req.params;
  const deletedCoffee = await deleteCoffee(id);
  res.send("Coffee deleted successfully");
};
