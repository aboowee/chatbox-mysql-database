
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

db.sync()
  .then (() =>
    console.log('Database has been established successfully.'))
  .catch ((error) => {
    console.error('Unable to connect to the database:', error);
  });

db.authenticate()
  .then(() =>
    console.log('Connection has been established successfully.'))
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

var User = db.define('users', {
  userName: Sequelize.STRING,
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
});

var Message = db.define('messages', {
  userName: Sequelize.STRING,
  textMessage: Sequelize.STRING,
  roomName: Sequelize.STRING,
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
});


module.exports.db = db;
module.exports.User = User;
module.exports.Message = Message;


