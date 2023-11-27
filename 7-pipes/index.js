// Pipes
// Piping in NodeJS is useful when we need to write some data coming from a source stream to another stream
// pipe returns a destination stream that enables chaining
// To perform pipe chaining, the destination stream has to be readable, duplex or transform.
// zlib allows to create zip files


const fs = require("node:fs");
const zlib = require("node:zlib");

const readableStream = fs.createReadStream("./fileA.txt", {
    encoding: "utf-8",
    // we are increasing the buffer size to 2kb
    highWaterMark: 2000
});

const writeableStream = fs.createWriteStream("./fileB.txt");

// example in this case we have destination steam as writable stream we cannot perform destination as pipe chaining here
readableStream.pipe(writeableStream);

// example of pipe chaining

const gzip = zlib.createGzip();
// this is fs module `WriteStream` method
readStream.pipe(gzip).pipe(fs.WriteStream("./fileC.txt.gz"));


