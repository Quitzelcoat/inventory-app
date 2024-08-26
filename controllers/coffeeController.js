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

exports.showNewCoffeeForm = async (req, res) => {
  try {
    const coffeeTypes = await getAllCoffeeTypes();
    res.render("coffee-form", { coffee: null, coffeeTypes });
  } catch (err) {
    res.status(500).send("Error fetching coffee types");
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
  res.redirect("/coffees");
};

exports.showEditCoffeeForm = async (req, res) => {
  const { id } = req.params;
  const coffee = await getCoffeeById(id);
  const coffeeTypes = await getAllCoffeeTypes(); // Fetch all coffee types
  res.render("coffee-form", { coffee, coffeeTypes }); // Pass the coffee and coffee types to the template
};

exports.updateAllCoffee = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity, coffee_type_id } = req.body;

  await updateCoffee(id, name, description, price, quantity, coffee_type_id);
  res.redirect("/coffees");
};

exports.deleteAllCoffee = async (req, res) => {
  const { id } = req.params;
  await deleteCoffee(id);
  res.send("Coffee deleted successfully");
};
