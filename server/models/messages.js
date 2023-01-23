var {db, User, Message} = require('../db');

module.exports = {
  getAll: function (controllerGetCallback) {
    Message.sync()
      .then(function() {
      // Now instantiate an object and save it:
        Message.findAll()
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
  }, // a function which produces all the messages

  create: function (params, callback) {
    Message.sync()
      .then(function() {
        // Now instantiate an object and save it:
        Message.create(params);
        callback(null, 'Message created');
      })
      .catch(function(err) {
        // Handle any error in the chain
        callback(err);
      });
  }
  // a function which can be used to insert a message into the database

};