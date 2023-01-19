CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  usersID INT,
  user_name VARCHAR(255),
  PRIMARY KEY (usersID)
);

CREATE TABLE rooms (
  roomsID INT,
  room_name VARCHAR(255),
  PRIMARY KEY (roomsID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
messagesID INT,
textMessage VARCHAR(255),
created_at DATETIME,
usersID INT,
roomsID INT,
FOREIGN KEY (usersID) REFERENCES users(usersID),
FOREIGN KEY (roomsID) REFERENCES rooms(roomsID),
PRIMARY KEY (messagesID)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

