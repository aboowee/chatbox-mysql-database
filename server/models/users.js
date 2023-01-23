var {db, User, Message} = require('../db');

module.exports = {
  getAll: function (controllerGetCallback) {
    User.sync()
      .then(function() {
        // Now instantiate an object and save it:
        User.findAll()
          .then ((data) => {
            controllerGetCallback(null, data);
          })
          .catch ((error) => {
            controllerGetCallback(error);
          });
      })
      .catch(function(err) {
        // Handle any error in the chain
        controllerGetCallback(err);
      });
  },

  create: function (inputData, callback) {
    User.sync()
      .then(function() {
        // Now instantiate an object and save it:
        User.create({userName: inputData.username.toString()});
        callback(null, 'User created');
      })
      .catch(function(err) {
        // Handle any error in the chain
        callback(err);
      });
  }
};
