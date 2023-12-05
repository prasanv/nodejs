const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

// IV means initialization vector, it prevents identical sequence
// Encryption algorithm are different from hashing algorithm
// AES = Advanced Encryption Algorithm

const message = 'Incredible india!'
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

// Encryption 

const encryptedMessage = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');

console.log({ encryptedMessage });

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8');

console.log({ decryptedMessage });
