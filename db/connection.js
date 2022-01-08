const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Tenma1234!',
        database: 'employee_db'
    },
    console.log('Connecting to the employees database.')
);

module.exports = db;