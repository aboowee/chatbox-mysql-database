var {db, User, Message} = require('../db');

module.exports = {
  getAll: function (controllerGetCallback) {

    // Now instantiate an object and save it:
    Message.findAll()
      .then ((data) => {
        controllerGetCallback(null, data);
      })
      .catch ((error) => {
        controllerGetCallback(error);
      });

  }, // a function which produces all the messages

  create: function (params, callback) {
    // Now instantiate an object and save it:
    Message.create(params)
      .then ((data) => {
        callback(null, data);
      })
      .catch(function(err) {
        // Handle any error in the chain
        callback(err);
      });
  }
  // a function which can be used to insert a message into the database

};