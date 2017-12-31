const dynamoDBServices = require('./dynamoDBServices.js');
const userAuthentication = require('./userAuthentication');

exports.handler = (event, context, callback) => {
    if(!event.email){
        callback(null, {success: false, msg: "Please provide a valid email!"});
    }else{
        if(!event.password){
            callback(null, {success: false, msg: "Please provide a valid password!"});
        }else{
            dynamoDBServices.getUserByEmail(event.email)
                .then((data) => {
                    let user = data.Items[0];
                    if(userAuthentication.matchPassword(user.password.S,event.password)){
                        callback(null, {success: true, data: {username: event.username, token: userAuthentication.jwtSign(event.email),imgUrl: user.imgUrl.S }}); 
                    }else{
                        callback(null, {success: false, msg: "Please enter correct password!"});
                    }
                })
                .catch((err) => {
                    callback(null, {success: false, msg: err});
                })
        }
    }
}