//imports database 
const db = require('./db/connection');
//inquirer package
const inquirer = require('inquirer');
//console table package
const Table = require('console.table');

//department module
const {viewAllDepartments} = require('./lib/department');
//role module
const {viewAllRoles} = require('./lib/role');
//employee module
const {viewAllEmployees} = require('./lib/employee');

//notifies user that database is connected or not
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
});

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
    .then(({choice}) => {
        switch(choice) {
            case 'View all departments':
                //view all depart function
                viewAllDepartments();
                break;

            case 'View all roles':
                //view all roles function
                viewAllRoles();
                break;

            case 'View all employees':
                //view all employees function
                viewAllEmployees();
                break;

            case 'Add a department':
                //insert add depart function
                break;

            case 'Add a role':
                //insert add role function
                break;

            case 'Add an employee':
                //insert add employee function
                break;
    
            case 'Update an employee role':
                //insert update employee function
                break;
    
            default:
                Exit();
        }
    })
};

module.exports = {mainMenu};