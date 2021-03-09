const AWS = require('aws-sdk');

const sns = new AWS.SNS({
    apiVersion: '2010-03-31',
    region: "eu-west-1"
});

