const { privateKey, publicKey, passphrase } = require('./5-keypairs');
const { createSign, createVerify } = require('node:crypto');

const message = 'Incredible Bharat!';

// Sign

const signer = createSign('rsa-sha256').update(message);
const signature = signer.sign({
    key: privateKey,
    passphrase,
  }, 'hex');

console.log({ signature });

// Verify

const verifier = createVerify('rsa-sha256').update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex')

console.log({ isVerified });



