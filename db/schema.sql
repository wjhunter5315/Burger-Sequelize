DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (100) NOT NULL,
    devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY (id),
    createdAt NULL,
    updatedAt NULL,
);
INSERT INTO burgers (burger_name) VALUES ("Double-Double");

INSERT INTO burgers (burger_name) VALUES ("Big Mac");

INSERT INTO burgers (burger_name) VALUES ("Whopper");