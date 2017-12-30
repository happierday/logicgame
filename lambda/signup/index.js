const s3Services = require('./s3Services');
const dynamoDBServices = require('./dynamoDBServices');
const userValidation = require('./userValidation');
const userAuthentication = require('./userAuthentication');

exports.handler = (event, context, callback) => {
    if(!userValidation.validateEmail(event.email)){
        callback(null, {success: false, msg: "Please provide a valid email!"});
    }else{
        dynamoDBServices.emailExist(event.email)
            .then(() => {
                return dynamoDBServices.usernameExist(event.username);
            })
            .then(() => {
                if(!userValidation.validateUsername(event.username)){
                    callback(null, {success: false, msg: "Please provide a valid username!"});
                }else{
                    if(!userValidation.validatePassword(event.password)){
                        callback(null, {success: false, msg: "Please provide a valid password!"});
                    }else{
                        return dynamoDBServices.usernameExist(event.username);
                    } 
                }
            })
            .then(() => {
                return s3Services.uploadToS3(event.datauri,event.username);
            })
            .then((location) => {
                return dynamoDBServices.uploadToDynamoAccount(event,location);
            })
            .then((location) =>  {
                return dynamoDBServices.uploadToDynamoUser(event,location);
            })
            .then((location) => {
                callback(null, {success: true, data: {username: event.username, token: userAuthentication.jwtSign(event.email),imgUrl: location }});
            })
            .catch(err=>{
                callback(null, {success: false, msg: err});
            })
        }
}