'use strict';

const repDB = require('../../repository/dynamoDB');

module.exports.handler = async (event, context, callback) => {

  const requestBody = JSON.parse(event.body);
  var params = {
    TableName:process.env.EMPLOYEE_TABLE,
    Key:{
        "id": requestBody.id
    },
  };

  repDB.delete(params)
  .then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: `Sucessfully delete the Employee ID ${res.id}`,
        employeeId: res.id
      })
    });
  })
  .catch(err => {
    console.log(err);
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message: `Unable to delete the employee ID ${res.id}`
      })
    })
  });
};
