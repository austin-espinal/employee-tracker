//import mainMenu function
const { mainMenu } = require('../app');
//imports database 
const db = require('./db/connection');
//console table package
const Table = require('console.table');
//inquirer package
const inquirer = require('inquirer');

viewAllDepartments = () => {
    const sql = `SELECT id, name AS Department FROM departments;`;

    db.promise().query(sql, (err, rows) => {
        if (err) throw err;

        Table(rows);
        mainMenu();
    });
};

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

            db.promise().query(sql, departName, (err, result) => {
                if (err) throw err;

                console.log('Department has been added');
                viewAllDepartments();
            });
        });
};

//export
module.exports = { viewAllDepartments, addDepartment };