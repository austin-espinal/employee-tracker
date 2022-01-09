//import mainMenu function
const { mainMenu } = require('../app');
//imports database 
const db = require('./db/connection');
//console table package
const Table = require('console.table');
//inquirer package
const inquirer = require('inquirer');

viewAllEmployees= () => {
    const sql = `SELECT * FROM employees;`;

    db.promise().query(sql, (err, rows) => {
        if(err) throw err;

        Table(rows);
        mainMenu();
    });
};

//export
module.exports = { viewAllEmployees };