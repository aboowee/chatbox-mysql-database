var {db, User, Message} = require('../db');

module.exports = {
  getAll: function (controllerGetCallback) {
    User.findAll()
      .then ((data) => {
        controllerGetCallback(null, data);
      })
      .catch ((error) => {
        controllerGetCallback(error);
      });
  },

  create: function (inputData, callback) {
    User.create({userName: inputData.username})
      .then ((data) => {
        callback(null, data);
      })
      .catch(function(err) {
        // Handle any error in the chain
        callback(err);
      });
  }
};
