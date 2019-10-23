### Schema
DROP DATABASE if exists employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department
(
	id INT NOT NULL AUTO_INCREMENT,
	department_name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE role
(
	id INT NOT NULL AUTO_INCREMENT,
	title varchar(30) NOT NULL,
	salary DECIMAL NOT NULL,
	department_id int NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE employee
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
	role_id INT NOT NULL,
	manager_id INT,
	PRIMARY KEY (id) 
);