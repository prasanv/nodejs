const {scrypt, scryptSync, randomBytes, randomUUID, timingSafeEqual} = require("node:crypto");

// scryptSync(password, salt, keylen[, options])
// crypto.scrypt(password, salt, keylen[, options], callback)

// crypto.randomBytes(size[, callback])
// crypto.randomUUID([options])


const hashUserPassword = (email, password) => {
    const salt = randomBytes(64).toString("hex");
    scrypt(password, salt, 64, (err, hashedKey) => {
        if (err) throw err;

        // steps to store it to DB
        const uuid = randomUUID();
        const user = {uuid, email, password: `${salt}:${hashedKey.toString('hex')}`}
        console.log(user);
    })
}

hashUserPassword("prasanv@gmail.com","Asdf!2345");

const login = (email, password) => {
    const [salt, key] = password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64)
    
    const keyBuffer = Buffer.from(hashedBuffer, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    console.log({keyBuffer, match})

    if(match){
        console.log('Login success');
    } else {
        console.log('Login fail');
    }
    

}

login("prasanv@gmail.com","Asdf!2345");