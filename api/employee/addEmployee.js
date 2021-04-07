'use strict';

const uuid = require('uuid');
const repDB = require('../../repository/dynamoDB');

const employeeSchema = (name, email, postId) => {
  const timestamp = new Date().getTime();
  return {
    TableName: process.env.EMPLOYEE_TABLE,
    Item: {
      id: uuid.v1(),
      name: name,
      email: email,
      postId: postId,
      submittedAt: timestamp,
      updatedAt: timestamp,
    }
  };  
};

module.exports.handler = async (event, context, callback) => {

  const requestBody = JSON.parse(event.body);
  const name = requestBody.name;
  const birthDate = requestBody.birthDate;
  const postId = requestBody.postId;

  repDB.add(employeeSchema(name, birthDate, postId))
  .then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: `Sucessfully adding a new Employee called ${name} and ID ${res.id}`,
        employeeId: res.id
      })
    });
  })
  .catch(err => {
    console.log(err);
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message: `Unable to add the employee called ${name}`
      })
    })
  });
};
