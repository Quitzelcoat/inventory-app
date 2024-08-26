const pool = require("./pool");

async function getAllCoffee() {
  const { rows } = await pool.query("SELECT * FROM Coffee");

  return rows;
}

async function getCoffeeById(id) {
  const { rows } = await pool.query("SELECT * FROM Coffee WHERE id = $1", [id]);

  return rows[0];
}

async function createCoffee(name, description, price, quality, coffee_type_id) {
  const { rows } = await pool.query(
    "INSERT INTO Coffee (name, description, price, quality, coffee_type_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, description, price, quality, coffee_type_id]
  );

  return rows[0];
}

async function updateCoffee(
  id,
  name,
  description,
  price,
  quality,
  coffee_type_id
) {
  const { rows } = await pool.query(
    "UPDATE Coffee SET name = $1, description = $2, price = $3, quality = $4, coffee_type_id = $5 WHERE id = $6 RETURNING *",
    [name, description, price, quality, coffee_type_id, id]
  );

  return rows[0];
}

async function deleteCoffee(id) {
  const { rows } = await pool.query(
    "DELETE FROM Coffee WHERE id = $1 RETURNING *",
    [id]
  );
  return rows[0];
}

// CoffeeType Queries

async function getAllCoffeeTypes() {
  const { rows } = await pool.query("SELECT * FROM CoffeeType");
  return rows;
}

async function getCoffeeTypeById(id) {
  const { rows } = await pool.query("SELECT * FROM CoffeeType WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function createCoffeeType(name, description) {
  const { rows } = await pool.query(
    "INSERT INTO CoffeeType (name, description) VALUES ($1, $2) RETURNING *",
    [name, description]
  );
  return rows[0];
}

async function updateCoffeeType(id, name, description) {
  const { rows } = await pool.query(
    "UPDATE CoffeeType SET name = $1, description = $2 WHERE id = $3 RETURNING *",
    [name, description, id]
  );
  return rows[0];
}

async function deleteCoffeeType(id) {
  const { rows } = await pool.query(
    "DELETE FROM CoffeeType WHERE id = $1 RETURNING *",
    [id]
  );
  return rows[0];
}

module.exports = {
  getAllCoffee,
  getCoffeeById,
  createCoffee,
  updateCoffee,
  deleteCoffee,
  getAllCoffeeTypes,
  getCoffeeTypeById,
  createCoffeeType,
  updateCoffeeType,
  deleteCoffeeType,
};
