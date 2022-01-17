# employee-tracker

## Description 

This project was created to view and manage the departments, roles, and employees. It was created with the intention to make tracking employees easier and keep a database of them. The application uses Javascript, Node, and MySQL.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)

* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

You'll need to install MySQL for the project which instructions can be found at (https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

After downloading and extracting the project from the zip, open the terminal and install these node packages

* npm init -y
* npm install inquirer
* npm install mysql2
* npm install console.table

The database needed to use the application will need to be set up. First, log into MYSQL via the terminal using "mysql -uroot -p". Enter in your password and type in "SOURCE db/db.sql" when MYSQL is connected to create the employee_db database. After, Type in "SOURCE db/schema.sql" to create the tables for the database. You may use "SOURCE db/seeds.sql" if you want to populate the database with data. Make sure to change the user and password in the connection.js to match your MySQL user and password in order to use the application.

## Usage 

(https://watch.screencastify.com/v/K4Gm2iPrN3hheh5wVxpm)
The link above is a link to the application direction video

To start the app, type "node app" in the terminal. You will be given the options to ViewAllDepartments, ViewAllRoles, ViewAllEmployees, AddDepartment, AddRole, AddEmployee, and UpdateEmployee. Selecting the ViewAll options will show their corressponding tables and bring up menu after. Selecting the Add options allows you to add a new department, new role, or new employee. It will show the table and then bring up the menu after. AddDepartment will only ask for the name for the new department. AddRole will ask the name of the role title, the salary, and which department the new role belongs to. AddEmployee will ask the first and last name, role of the employee, and who is the manager of the new employee. UpdateEmployee will ask you to select the employee you wish to update and select the role you wish to change the employee to. To exit the application, just select the exit option in the menu. 

## Contributing

No contribution necessary.

## Tests

You can test this application by using the seed file to seed the database. You can also make your own seeds file or make the employees, roles, and departments through the app.

## Questions

Github: [austin-espinal](https://github.com/austin-espinal)   
Email: [austinespi@gmail.com](mailto:austinespi@gmail.com)  

The best way to reach me is through email. Github is also acceptable. 