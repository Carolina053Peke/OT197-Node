const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_KEY_ID ,
    secretAccessKey: process.env.AWS_SECRET_KEY 
}); 
const imageUpload = async (base64) => {

    const base64Data = new Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
  
    const type = base64.split(';')[0].split('/')[1];

    const params = {
      Bucket: process.env.BUCKET,
      Key: `${new Date().getTime()}.${type}`, 
      Body: base64Data,
      ACL: 'public-read',
      ContentEncoding: 'base64', 
      ContentType: `image/${type}` 
    }
  
    let location = '';
    let key = '';
    try {
      const { Location, Key } = await s3.upload(params).promise();
      location = Location;
      key = Key;
    } catch (error) {
    }
  console.log(location)
    return location;
  
  }
  
  module.exports = imageUpload;