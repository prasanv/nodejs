const fs = require('node:fs');
const fsPromises = require('node:fs/promises');

// if you don't specify the encoding option, it returns HexaDecimal representation of raw binary data
// const fileContents = fs.readFileSync("./file.txt");
// console.log(fileContents.toJSON());

const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log("readFileSync", fileContents);

// The callback in the readfile has 2 arguments, first one is error and second one is data, 
// this pattern is called error first call back in nodejs and can be commonly found.
fs.readFile("./file.txt", "utf-8", (err, data) => {
    if(err) {
        console.error(err);
    } else {
        console.log("readFile", data);
    }
});

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

// promise based syntax
fsPromises.readFile("./file.txt", "utf-8")
    .then((res) => console.log("fsPromises then method: ", res))
    .catch((err) => console.error(err));

const readFile = async () => { 
    try {
        const res = await fsPromises.readFile("./file.txt", "utf-8")
        console.log("fsPromises async/await method: ", res)
    } catch (e) {
        console.error(e);
    }
}
readFile();