const jwt = require('jsonwebtoken');

function jwtSign(value){
    return jwt.sign({email: value},process.env.Secret, { expiresIn: '3d' });
}

function matchPassword(p1,p2){
    return (p1 === p2)? true : false;
}

module.exports = {
    jwtSign: jwtSign,
    matchPassword: matchPassword
}