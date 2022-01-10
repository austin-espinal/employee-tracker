//imports database 
const db = require('./db/connection');

//import mainMenu function
const mainMenu = require('./lib/menu');

//notifies user that database is connected or not and starts app if database is connected
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    console.log(`==================

                    Employee Tracker

                ===================`);
    mainMenu();
});