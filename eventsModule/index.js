const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// This is called event driven programming
emitter.on("order-pizza", (size, topping) => {
    if(size && topping){
        console.log(`Baking ${size.toLowerCase()} ${topping.toLowerCase()} pizza!`)
    } else {
        console.log(`Baking pizza!`)
    }
});

// you can add multiple listeners to the sam event
emitter.on("order-pizza", (...args) => {
    const size = args[0];
    if(size.toString().toLowerCase() === "large")
    console.log("Please don't forget to pick up your free drink");
})

emitter.emit("order-pizza", "LARGE", "mushroom");