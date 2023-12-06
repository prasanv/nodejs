const { privateKey, publicKey, passphrase } = require('./5-keypairs');
const { publicEncrypt, privateDecrypt } = require('node:crypto');

const message = 'Incredible India!';

const encryptedData = publicEncrypt(
    publicKey, 
    Buffer.from(message)
    );

console.log({encryptedData: encryptedData.toString('hex')});

const decryptedData = privateDecrypt({
    key: privateKey,
    passphrase,
  }, encryptedData);

  console.log("Decrypted Message: ", decryptedData.toString('utf-8'));