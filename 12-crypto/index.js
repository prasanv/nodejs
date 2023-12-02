const crypto = require("node:crypto");

// Lists all hashing algorithms supported by next js
// console.log(crypto.getHashes());

// createHash is a hashing function always returns same value for the same input

const hexHash = (input) => {
    // returns a 256-bit digest for sha256 algo
    return crypto.createHash('sha256').update(input).digest('hex');
}

const base64Hash = (input) => {
    // returns a 256-bit digest for sha256 algo
    return crypto.createHash('sha256').update(input).digest('base64');
}

const hash1 = hexHash("hi prasan");
const hash2 = hexHash("hi prasan");

const result = hash1 === hash2 ? "same hash" : "not same hash";
console.log(result);

console.log(base64Hash("hi prasan"));
console.log(base64Hash("hi prasan"));