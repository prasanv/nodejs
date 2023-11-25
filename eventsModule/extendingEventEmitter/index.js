const PizzaShop = require("./pizzaShop");
const DrinkMachine = require("./drinkMachine")

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

console.log(`Order number before emitting event ${pizzaShop.orderNumber}`);

pizzaShop.on("order", (size, topping) => {
    console.log(`Baking ${size.toLowerCase()} ${topping.toLowerCase()} pizza!`)
    console.log(`Order number before emitting event ${pizzaShop.orderNumber}`);
    drinkMachine.serveDrink(size)
})

pizzaShop.orderPizza("large","mushroom");