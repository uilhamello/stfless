const AWS = require('aws-sdk');
AWS.config.setPromisesDependency(require('bluebird'));
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = (params, callback) => {
    dynamoDb.scan(params, callback);
}

module.exports.add = async data => {
    return dynamoDb.put(data).promise();      
}

module.exports.byId = async id => {
    return dynamoDb.get(id).promise();
}

module.exports.delete = async id => {
    return dynamoDb.delete(id).promise();
}
