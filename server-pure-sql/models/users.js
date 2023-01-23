var db = require('../db');

module.exports = {
  getAll: function (controllerGetCallback) {
    db.query(
      'SELECT * FROM users', function(error, results) {
        if (error) {
          controllerGetCallback(error);
        } else {
          controllerGetCallback(null, results);
        }
      }
    );
  },

  create: function (inputData, callback) {
    db.query(`INSERT INTO users (userName) VALUES ('${inputData.username}')`, function(error, results) {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
  }
};
