var models = require('../models');



module.exports = {
  get: function (req, res) {
    //Invoke models.getall
    models.getAll((err, data) => {
      console.log('This is results from MESSAGES Model: ', data);
      res.send(data);
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    //Invoke models.create

  } // a function which handles posting a message to the database
};


// App > Routes > Controller > Models > DB (server connection)