// console.log(Buffer);

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