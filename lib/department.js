//imports database 
const db = require('../db/connection');
//console table package
const Table = require('console.table');
//inquirer package
const inquirer = require('inquirer');

//function to view all departments
viewAllDepartments = () => {
    const sql = `SELECT id, name AS Department FROM departments;`;
    const mainMenu = require('./menu');

    db.promise().query(sql)
    .then( ([rows]) => {
        console.table(rows);
        mainMenu();
    })
    .catch(err => {
        if(err) throw err;
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
            const newName = departName.newDepartment

            db.promise().query(sql, newName)
            .then(viewAllDepartments())
            .catch(err => {
                if(err) throw err;
            });
        });
};

//exports viewAllDepartments and addDepartment functions
module.exports = { viewAllDepartments, addDepartment };