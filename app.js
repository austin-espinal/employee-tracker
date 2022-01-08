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

//function to exit app and database
const Exit = () => {
    console.log('Good bye!');
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
                //insert view all depart function
                break;

            case 'View all roles':
                //insert view all roles function
                break;

            case 'View all employees':
                //insert view all employees function
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

