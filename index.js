// dbseeder.js
const faker = require("faker");
const Seeder = require("mysql-db-seed").Seeder;
// ES6 use `import {Seeder} from "mysql-db-seed";`

// Generate a new Seeder instance
const seed = new Seeder(10, "localhost", "root", "", "stest");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

(async () => {
  await seed.seed(10, "categories", {
    name: faker.commerce.department,
    description: faker.lorem.paragraph,
  });

  await seed.seed(50, "items", {
    name: faker.commerce.productName,
    description: faker.commerce.productDescription,
    price: faker.commerce.price,
    status: () => getRandomInt(0, 2),
    id_category: () => getRandomInt(1, 10),
  });

  seed.exit();
  process.exit();
})();
