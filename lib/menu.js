//imports database 
const db = require('../db/connection');
//inquirer package
const inquirer = require('inquirer');

//department module
const { viewAllDepartments, addDepartment } = require('./department');
//role module
const { viewAllRoles, addRole } = require('./role');
//employee module
const { viewAllEmployees, addEmployee, updateEmployee } = require('./employee');

//function to exit app and database
const Exit = () => {
    console.log('Goodbye!');
    console.log('Database connection ended');
    db.end();
}

//main menu that user will see and select from
const mainMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'Please choose one an option from this list',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        }
    ])
    .then((choice) => {
            switch (choice.choices) {
                case 'View all departments':
                    viewAllDepartments();
                    break;

                case 'View all roles':
                    viewAllRoles();
                    break;

                case 'View all employees':
                    viewAllEmployees();
                    break;

                case 'Add a department':
                    addDepartment();
                    break;

                case 'Add a role':
                    addRole();
                    break;

                case 'Add an employee':
                    addEmployee();
                    break;

                case 'Update an employee role':
                    updateEmployee();
                    break;

                default:
                    Exit();
            }
    });
};

//exports mainMenu function to the other modules
module.exports =  mainMenu;