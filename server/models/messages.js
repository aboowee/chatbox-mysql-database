var db = require('../db');

module.exports = {
  getAll: function (controllerGetCallback) {
    db.query(
      'SELECT messages.messagesID, messages.roomName, messages.textMessage, users.username FROM messages LEFT OUTER JOIN users on (messages.usersID = users.usersID) ORDER BY messages.messagesID desc', function(error, results, fields) {
        if (error) {
          controllerGetCallback(error);
        } else {
          controllerGetCallback(null, results);
        }
      }
    );
  }, // a function which produces all the messages

  create: function (params, callback) {
    db.query('INSERT INTO messages (textMessage, roomName, usersID) VALUES (?, ?, (SELECT usersID FROM users WHERE userName = ? LIMIT 1))', params, function (error, results) {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
  }
  // a function which can be used to insert a message into the database

};