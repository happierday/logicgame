const aws = require('aws-sdk');
const dataUriToBuffer = require('data-uri-to-buffer');

let params;

aws.config.apiVersions = {
  s3: '2006-03-01',
};

const s3 = new aws.S3();

function uploadToS3(datauri,username){
    params  = {
        Bucket: process.env.S3BucketName,
        Key: username + "/profile/img",
        Body: dataUriToBuffer(datauri)
    }
    return new Promise((resolve,reject) => {
        s3.upload(params,(err,data) => {
            if(err) return reject(err);
            return resolve(data.Location);
        });
    })
}

module.exports = {
    uploadToS3: uploadToS3
}