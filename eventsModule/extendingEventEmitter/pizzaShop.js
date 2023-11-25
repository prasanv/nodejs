const EventEmitter = require("node:events")

class PizzaShop extends EventEmitter{
    constructor(...args) {
        super()
        console.log(args)
        this.orderNumber = 0
    }

    orderPizza (size, topping) {
        this.orderNumber++;
        this.emit("order", size, topping);
    }

    displayOrderNumber () {
        console.log(`your order number is ${this.orderNumber}`);
    }
}

module.exports = PizzaShop;