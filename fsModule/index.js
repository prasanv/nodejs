const fs = require('node:fs');

const fileContents = fs.readFileSync("./file.txt", "utf-8");

// if you don't specify the encoding option, it returns HexaDecimal representation of raw binary data
// console.log(fileContents.toJSON());

console.log(fileContents);

// The callback in the readfile returns 2 values error and data, 
// this pattern is called error first call back in nodejs and can be commonly found.
fs.readFile("./file.txt", "utf-8", (err, data) => {
    if(err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

console.log("To check the order fo the execution");

fs.writeFileSync("./greet.txt", "I'm doing good.");

fs.writeFileSync("./greet1.txt", "I'm doing good.");

fs.writeFile("./greet2.txt", "Hi, I'm doing good.", (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("File written successfully")
    }
});

// Append arguments with append flag
fs.writeFile("./greet2.txt", " Appending more text.", {flag: 'a'}, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("File written successfully")
    }
});