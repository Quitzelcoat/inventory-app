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
  const { id } = req.params; // Get the id from the request params
  const { name, description, price, quantity, coffee_type_id } = req.body;

  // Convert id to an integer
  const coffeeId = parseInt(id, 10);

  try {
    // Update coffee in the database
    await updateCoffee(
      coffeeId,
      name,
      description,
      price,
      quantity,
      coffee_type_id
    );
    // Redirect to the coffee list or the updated coffee detail page
    res.redirect(`/coffees/${coffeeId}`);
  } catch (error) {
    console.error("Error updating coffee:", error);
    res.status(500).send("Error updating coffee");
  }
};

exports.deleteAllCoffee = async (req, res) => {
  const { id } = req.params;
  console.log(`Deleting coffee with ID: ${id}`);
  await deleteCoffee(id);
  res.send("Coffee deleted successfully");
};
