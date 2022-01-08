//import mainMenu function
const { mainMenu } = require('../app');
//imports database 
const db = require('./db/connection');
//console table package
const Table = require('console.table');

viewAllRoles= () => {
    const sql = `SELECT * FROM roles;`;

    db.promise().query(sql, (err, rows) => {
        if(err) throw err;

        Table(rows);
        mainMenu();
    });
};

//export
module.exports = { viewAllRoles };