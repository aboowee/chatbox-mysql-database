var db = require('../db');

module.exports = {
  getAll: function (controllerGetCallback) {
    //db.connection.connect();
    db.connection.query(
      'SELECT * FROM users', function(error, results, fields) {
        console.log('This is results from users.userName: ', results);
        if (error) {
          console.log('Error: ', error);
          controllerGetCallback(error);
        } else {
          controllerGetCallback(null, results);
        }
      }
    );
    //db.connection.end();
  },

  create: function (inputData, callback) {
    // db.connection.connect();
    // db.connection.query(`SELECT userName from users WHERE userName = '${inputData.username}'`, function(error, results, field) {
    //   if (!results) {
    db.connection.query(`INSERT INTO users (userName)
        VALUES ('${inputData.username}')`, function(error, results, field) {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
    //db.connection.end();
  }
};
