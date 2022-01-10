//import mainMenu function
const mainMenu = require('./menu');
//imports database 
const db = require('../db/connection');
//console table package
const Table = require('console.table');
//inquirer package
const inquirer = require('inquirer');

//function to view all roles with salary and associated department
viewAllRoles = () => {
    const sql = `SELECT roles.id, roles.title, roles.salary, departments.name as Department
                FROM roles
                LEFT JOIN departments ON roles.department_id = departments.id;`;

    db.promise().query(sql, (err, rows) => {
        if (err) throw err;

        Table(rows);
        mainMenu();
    });
};

//function to add a role to the database
addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'newTitle',
            message: 'What is the name of the new role title you wish to add?',
            validate: newTitle => {
                if (newTitle) {
                    return true;
                } else {
                    console.log('Please enter a name for the new role title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'newSalary',
            message: 'What is the salary of the new role you wish to add?',
            validate: newSalary => {
                if (newSalary) {
                    return true;
                } else {
                    console.log('Please enter a salary for the new role!')
                    return false;
                }
            }
        }
    ])
        .then(role => {
            const params = [role.newTitle, role.newSalary];

            const roleSql = `SELECT name, id FROM department`;
            db.promise().query(roleSql, (err, data) => {
                if (err) throw err;

                const department = data.map(({ name, id }) => ({ name: name, value: id }));

                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'department',
                        message: "Which department does this role belong to?",
                        choices: department
                    }
                ])
                    .then(choice => {
                        const chosenDepartment = choice.department;
                        params.push(chosenDepartment);

                        const sql = `INSERT INTO roles (title, salary, department_id)
                        VALUES (?, ?, ?);`;

                        db.promise().query(sql, params, (err, result) => {
                            if (err) throw err;

                            console.log('Role has been added');
                            viewAllRoles();
                        });
                    });
            });
        });
};

//exports viewAllRoles and addRole functions
module.exports = { viewAllRoles, addRole };