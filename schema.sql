### Schema
DROP DATABASE if exists employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department
(
	id INT NOT NULL AUTO_INCREMENT,
	name_id varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE roletitle
(
	id INT NOT NULL,
	title varchar(30) NOT NULL,
	salary DECIMAL NOT NULL,
	department_id int NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE employee
(
id INT NOT NULL,
	first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
	role_id INT NOT NULL,
	manager_id INT NOT NULL
);

 SELECT client_name, party_name FROM clients LEFT JOIN parties ON parties.client_id = clients.id;