const jwt = require('jsonwebtoken');

function jwtSign(value){
    return jwt.sign({email: value},process.env.Secret, { expiresIn: '3d' });
}

module.exports = {
    jwtSign: jwtSign,
}