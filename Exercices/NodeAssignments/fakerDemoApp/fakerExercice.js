let faker = require("faker");

for (let i = 0; i < 10; i++) {
    createRandomProduct();
}

function createRandomProduct() {
    let randomProductNames = faker.commerce.productName();
    let randomPrice = faker.commerce.price();;

    console.log(`${randomProductNames}: $${randomPrice} \n`);
}