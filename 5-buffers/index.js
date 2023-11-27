// Buffers
// Node.js cannot control the pace at which data arrives in the stream.  
// It can only decide when is the right time to send the data for processing. 
// If there is data already processed or too little data to process, Node puts the arriving data in a buffer.  
// It is an intentionally small area that Node maintains in the runtime to process a stream of data. 
// Buffer is a global node module. Other modules internally use buffers for their functioning we don't use them directly.

console.log(Buffer);

// DEfaults to UTF-8
// const buffer = new Buffer.from("PrasanV", "UTF-8")

const buffer = new Buffer.from("Prasan Venkat")

// Based on the above from value, if the characters are less then it will just overwrite required char
buffer.write("Tamil Nadu");

// Based on the above from value, buffer has limited space cannot fit every character
// buffer.write("Salem, TamilNadu");

console.log(buffer.toString());

// Returns HexaDecimal representation of raw binary data
console.log(buffer);

// Returns utf-8 character encoded value
console.log(buffer.toJSON());