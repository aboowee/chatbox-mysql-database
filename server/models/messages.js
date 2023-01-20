var db = require('../db');

module.exports = {
  getAll: function (controllerGetCallback) { //within controller, invoke this getAll((err, data) => res.send(results)
    db.query(
      'SELECT * FROM messages', function(error, results, fields) {
        console.log('This is results from MESSAGES: ', results);
        if (error) {
          console.log('Error: ', error);
        } else {
          controllerGetCallback(null, results);
        }
      }
      //if err > do something
      //if results, callback(null, results);
  //callback(null, results);
      //models.getAll((err, data) => if data, res.send(data))
    );
  }, // a function which produces all the messages

  // CREATE TABLE messages (
  //   /* Describe your table here.*/
  // messagesID INT,
  // textMessage VARCHAR(255),
  // createdAt DATETIME,
  // usersID INT,
  // roomsID INT,
  // FOREIGN KEY (usersID) REFERENCES users(usersID),
  // FOREIGN KEY (roomsID) REFERENCES rooms(roomsID),
  // PRIMARY KEY (messagesID)
  // );





  create: function (inputData, callback) {
    console.log('These are arguments:   ', arguments);
    db.connection.query(`INSERT INTO messages (messagesID, textMessage, createdAt, usersID, roomsID ) VALUES`);
  }
  // a function which can be used to insert a message into the database
};
