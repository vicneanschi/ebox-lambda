'use strict';
const ebox = require('ebox');

module.exports.getUsage = (event, context, callback) => {

  ebox.getUsage(process.env.USERNAME, process.env.PASSWORD)
    .then(response => {
      console.log(response);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      })
    })
    .catch(err => {
      console.error(err);
      callback(err);
    });
};
