'use strict';

const uuid = require('uuid');
const repDB = require('../../repository/dynamoDB');

const employeeSchema = {
    TableName: process.env.EMPLOYEE_TABLE,
    ProjectionExpression: "id, fullname, email"
};

module.exports.list = (event, context, callback) => {

    repDB.get(employeeSchema, onScan)
  .then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: `Sucessfully adding a new Employee called ${name} and ID ${res.id}`,
        employee: data.Items
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