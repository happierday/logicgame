const aws = require('aws-sdk');

aws.config.apiVersions = {
  dynamodb: '2012-08-10',
  s3: '2006-03-01',
};

let params;

aws.config.apiVersions = {
  dynamodb: '2012-08-10'
};

const dynamoDb = new aws.DynamoDB();

function usernameExist(username){
    params = {
        ExpressionAttributeValues:{
            ":v1": {
                S: username
            }
        },
        KeyConditionExpression: "username = :v1",
        TableName: process.env.DynamoDBUsername
    };
    return new Promise((resolve,reject) => {
        dynamoDb.query(params, (err,data) => {
            if(err) return reject(err);
            else{
                if(data.Count === 0) return resolve();
                return reject("Email already exist!");
            }
        })
    })
}

function emailExist(email){
    params = {
        ExpressionAttributeValues:{
            ":v1": {
                S: email
            }
        },
        KeyConditionExpression: "email = :v1",
        TableName: process.env.DynamoDBUserAccount
    };
    return new Promise((resolve,reject) => {
        dynamoDb.query(params, (err,data) => {
            if(err) return reject(err);
            else{
                if(data.Count === 0) return resolve();
                return reject("Username already exist!");
            }
        })
    })
}

//two tables to  check uniquness of email and username
function uploadToDynamoAccount(event,location){
    params = {
        Item:{
            "email": {S: event.email},
            "password": {S: event.password},
            "imgUrl": {S: location}
        },
        TableName: process.env.DynamoDBUserAccount
    }
    return new Promise((resolve,reject) => {
        dynamoDb.putItem(params, (err,data) => {
            if(err) return reject(err)
            return resolve(location);
        })
    })
}

function uploadToDynamoUser(event,location){
    params = {
        Item:{
            "username": {S: event.username},
            "email": {S: event.email},
        },
        TableName: process.env.DynamoDBUsername
    }
    return new Promise((resolve,reject) => {
        dynamoDb.putItem(params, (err,data) => {
            if(err) return reject(err)
            return resolve(location);
        })
    })
}

function deleteUser(email){
    params = {
        Key: {
           "email": {
                S: email
            }
        }, 
        TableName: process.env.DynamoName
    }
    return new Promise((resolve,reject) => {
        dynamoDb.deleteItem(params,(err,data) => {
            if(err) return resolve(err);
            return resolve();
        })
    })
}

module.exports = {
    emailExist: emailExist,
    uploadToDynamoUser: uploadToDynamoUser,
    deleteUser: deleteUser,
    usernameExist: usernameExist,
    uploadToDynamoAccount: uploadToDynamoAccount
}