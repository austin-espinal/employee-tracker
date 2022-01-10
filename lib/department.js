//import mainMenu function
const mainMenu = require('./menu');
//imports database 
const db = require('../db/connection');
//console table package
const Table = require('console.table');
//inquirer package
const inquirer = require('inquirer');

//function to view all departments
viewAllDepartments = () => {
    const sql = `SELECT id, name AS Department FROM departments;`;

    db.promise().query(sql, (err, rows) => {
        if (err) throw err;

        Table(rows);
        mainMenu();
    });
};

//function to add department to database
addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: 'What is the name of the new department you wish to add?',
            validate: newDepartment => {
                if (newDepartment) {
                    return true;
                } else {
                    console.log('Please enter a name for the new department!')
                    return false;
                }
            }

        }
    ])
        .then(departName => {
            const sql = `INSERT INTO departments (name)
                        VALUES (?);`;

            db.promise().query(sql, departName.newDepartment, (err, result) => {
                if (err) throw err;

                console.log('Department has been added');
                viewAllDepartments();
            });
        });
};

//exports viewAllDepartments and addDepartment functions
module.exports = { viewAllDepartments, addDepartment };