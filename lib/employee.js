//imports database 
const db = require('../db/connection');
//console table package
const Table = require('console.table');
//inquirer package
const inquirer = require('inquirer');

//function to view all employees
viewAllEmployees = () => {
    const sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.title,
                departments.name AS department, roles.salary, 
                CONCAT (manager.first_name,' ', manager.last_name) AS manager
                FROM employees
                LEFT JOIN roles ON employees.role_id = roles.id
                LEFT JOIN departments ON roles.department_id = departments.id
                LEFT JOIN employees manager ON employees.manager_id = manager.id;`;

    const mainMenu = require('./menu');

    db.promise().query(sql)
        .then(([rows]) => {
            console.table(rows);
            mainMenu();
        })
        .catch(err => {
            if (err) throw err;
        });
};

//function to add a new employee to the database
addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "What is the new employee's first name?",
            validate: first => {
                if (first) {
                    return true;
                } else {
                    console.log("Please enter the new employee's first name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the new employee's last name?",
            validate: last => {
                if (last) {
                    return true;
                } else {
                    console.log("Please enter the new employee's last name!");
                    return false;
                }
            }
        }
    ])
        .then(names => {
            const params = [names.firstName, names.lastName]
            const roleSql = `SELECT roles.id, roles.title FROM roles`;

            db.query(roleSql, (err, data) => {
                if (err) throw err;

                const roles = data.map(({ id, title }) => ({ name: title, value: id }));

                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'role',
                        message: "What is the role of this new employee?",
                        choices: roles
                    }
                ])
                    .then(roleChoice => {
                        const role = roleChoice.role;
                        params.push(role);

                        const managerSql = `SELECT * FROM employees`;

                        db.query(managerSql, (err, data) => {
                            if (err) throw err;

                            const managers = data.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));

                            inquirer.prompt([
                                {
                                    type: 'list',
                                    name: 'manager',
                                    message: "Who is the employee's manager?",
                                    choices: managers
                                }
                            ])
                                .then(managerChoice => {
                                    const manager = managerChoice.manager;
                                    params.push(manager);

                                    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                                                VALUES (?, ?, ?, ?)`;

                                    db.query(sql, params, (err, result) => {
                                        if (err) throw err;

                                        console.log("Employee has been added!")
                                        viewAllEmployees();
                                    });
                                });
                        });
                    });
            });
        });
};

//function to update an employee's role in database
updateEmployee = () => {
    const employeeSql = `SELECT * FROM employees`;

    db.query(employeeSql, (err, data) => {
        if (err) throw err;

        const employees = data.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));

        inquirer.prompt([
            {
                type: 'list',
                name: 'name',
                message: "Which employee would you like to update?",
                choices: employees
            }
        ])
            .then(selectEmployee => {
                const employeeName = selectEmployee.name;
                const params = [];
                params.push(employeeName);

                const roleSql = `SELECT * FROM roles`;

                db.query(roleSql, (err, data) => {
                    if (err) throw err;

                    const roles = data.map(({ id, title }) => ({ name: title, value: id }));

                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'role',
                            message: "What is the employee's new role?",
                            choices: roles
                        }
                    ])
                        .then(selectRole => {
                            const role = selectRole.role;
                            params.push(role);

                            let employee = params[0]
                            params[0] = role
                            params[1] = employee

                            const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;

                            db.query(sql, params, (err, result) => {
                                if (err) throw err;

                                console.log("== Employee has been updated! ==");
                                viewAllEmployees();
                            });
                        });
                });
            });
    });
};

//exports viewAllEmployees, addEmployee, and updateEmployee functions
module.exports = { viewAllEmployees, addEmployee, updateEmployee };