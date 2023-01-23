CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  usersID INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(255),
  PRIMARY KEY (usersID)
);

-- CREATE TABLE rooms (
--   roomsID INT,
--   roomName VARCHAR(255),
--   PRIMARY KEY (roomsID)
-- );

CREATE TABLE messages (
  /* Describe your table here.*/
messagesID INT NOT NULL AUTO_INCREMENT,
textMessage VARCHAR(255),
-- createdAt DATETIME,
usersID INT,
roomName VARCHAR(255),
-- FOREIGN KEY (usersID) REFERENCES users(usersID),
-- FOREIGN KEY (roomsID) REFERENCES rooms(roomsID),
PRIMARY KEY (messagesID)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

