// Hash-based message authentication code (or HMAC) is a cryptographic authentication technique 
// that uses a hash function and a secret key.

const { createHmac } = require('crypto');

const key = 'secret-key';
const message = 'Hi Prasan';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log({ hmac });

const key2 = 'super-secret-key';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

console.log({ hmac2 });
