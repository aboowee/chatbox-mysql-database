var db = require('../db');

module.exports = {
  getAll: function (controllerGetCallback) {
   // db.connection.connect();
    db.connection.query(
      // Instead of all, need to return ...what? username,roomname,text
      'SELECT messages.messagesID, messages.roomname, messages.textMessage FROM messages LEFT OUTER JOIN users on (messages.usersID = users.usersID) ORDER BY messages.ID desc', function(error, results, fields) {
        console.log('This is results from MESSAGES: ', results);
        if (error) {
          console.log('Error: ', error);
        } else {
          controllerGetCallback(null, results);
        }
      }
    );
    // db.connection.end();
  }, // a function which produces all the messages

  // CREATE TABLE users (
  //   usersID INT,
  //   userName VARCHAR(255),
  //   PRIMARY KEY (usersID)
  // );


  // CREATE TABLE messages (
  //   /* Describe your table here.*/
  // messagesID INT,
  // textMessage VARCHAR(255),
  // createdAt DATETIME,
  // usersID INT,
  // roomName VARCHAR(255),
  // FOREIGN KEY (usersID) REFERENCES users(usersID),
  // PRIMARY KEY (messagesID)
  // );

  //users can have many messages
  //message can only have 1 user


  create: function (inputData, callback) {
    console.log('These are arguments:   ', arguments);
    // db.connection.connect();
    db.connection.query(`INSERT INTO messages (textMessage, roomName, usersID) VALUES ('${inputData.message}', '${inputData.roomname}', (SELECT users.usersID FROM users WHERE users.userName = '${inputData.username}'))`, function (error, results, fields) {
      if (error) {
        callback(error);
      } else {
        callback(null, 'Data sent');
      }
    });
    // db.connection.end();
  }
  // a function which can be used to insert a message into the database

};


// Sample POST data:
// {
//   "username": "steve",
//   "message": "test!",
//   "roomname": "testlobby"
// }