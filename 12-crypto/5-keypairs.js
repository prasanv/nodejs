const { generateKeyPairSync } = require('node:crypto');

// crypto.generateKeyPairSync(type, options)
// crypto.generateKeyPair(type, options, callback)

// Generates a new asymmetric key pair of the given type. RSA, RSA-PSS, DSA, EC, Ed25519, Ed448, X25519, X448, and DH are currently supported.
// When encoding public keys, it is recommended to use 'spki'. When encoding private keys, it is recommended to use 'pkcs8' with a strong passphrase, and to keep the passphrase confidential.

const passphrase = 'secret-phrase'

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength : 2048,
    publicKeyEncoding: {
        type: 'spki', // recommended
        format: 'pem' 
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase
    },
})

console.log(privateKey, publicKey);

module.exports = {
    privateKey, 
    publicKey,
    passphrase   
}