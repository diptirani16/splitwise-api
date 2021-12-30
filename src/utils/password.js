const { scrypt, randomBytes, timingSafeEqual } = require('crypto');

exports.hashPassword = (pass) => {
    return new Promise((resolve, reject) => {
        const salt = randomBytes(16).toString('hex');
        scrypt(pass, salt, 16, (err, key) => {
            if(err) reject(err)
            else resolve(`${salt}:${key.toString('hex')}`)
        })
    })
}

exports.verifyPassword = (pass, hash) => {
    return new Promise((resolve, reject) => {
        const [salt, storedPass] = hash.split(':')
        scrypt(pass, salt, 16, (err, key) => {
            if(err) reject(err)
            resolve(timingSafeEqual(Buffer.from(storedPass, 'hex'), key))
        })
    })
}