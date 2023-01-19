var models = require('../models');
var mysql = require('mysql2');
var {connection: connection} = require('../db');


module.exports = {
  get: function (req, res) {
    // Querying the database
    //  SELECT * FROM messages;
    // Inner join users id and rooms id > to get usernames and room names
    // Returning the results with res.send()
    connection.query(
      'SELECT * FROM messages', function(error, results, fields) {
        res.send(results);
      }
    );

  }, // a function which handles a get request for all messages
  post: function (req, res) {

  } // a function which handles posting a message to the database
};
