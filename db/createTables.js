const { Client } = require("pg");
require("dotenv").config();

const typeSql = `
    CREATE TABLE IF NOT EXISTS CoffeeType (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        description TEXT
    );
`;

const coffeeSql = `
    CREATE TABLE IF NOT EXISTS Coffee (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        quantity INT NOT NULL DEFAULT 0,
        coffee_type_id INT REFERENCES CoffeeType(id)
    );
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://haris:user1234@localhost:5432/inventory",
  });
  await client.connect();
  await client.query(typeSql);
  await client.query(coffeeSql);
  await client.end();
  console.log("done");
}

main();
