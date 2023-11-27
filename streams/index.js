// Streams
// A stream is a sequence of data that is being moved from one point to another over time.
// Ex: a stream of data being transferred from one file to another within the same computer
// Work with data in chunks instead of waiting for the entire data to be available at once. 
// If you're transferring file contents from file A to file B, you don't wait for entire fileA content to be saved in temporary memory before moving it into file B
// Instead, the content is transferred in chunks over time which prevents unnecessary memory usage
// Stream is a built-in node module that inherits from the event emitter class. Other modules internally use streams for their functioning we don't use them directly.

const fs = require("node:fs");

const readStream = fs.createReadStream("./fileA.txt", {
    encoding: "utf-8",
    // we are increasing the buffer size to 2kb
    highWaterMark: 2000
});

const writeStream = fs.createWriteStream("./fileB.txt");

// readStream emits a `data` by default and the callback function as default chunk argument
// size of the chunk depends on the buffer size
readStream.on("data", (chunk) => {
    console.log({ chunk })
    writeStream.write(chunk);
})