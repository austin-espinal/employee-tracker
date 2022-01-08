//imports database 
const db = require('./db/connection');
//inquirer package
const inquirer = require('inquirer');
//console table package
const cTable = require('console.table');

//department module
const department = require('./lib/department');
//role module
const roles = require('./lib/role');
//employee module
const employee = require('./lib/employee');

//notifies user that database is connected or not
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
});

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
    ]);
};