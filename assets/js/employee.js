const inquirer = require("inquirer");
const db = require("../../db/connection");
const promptUser = require('../../app')
const cTable = require('console.table');

function allEmployees(){
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title 
                AS role, role.salary,
                CONCAT(manager.first_name,' ', manager.last_name) 
                AS manager, department.name 
                AS department_name
                FROM employee 
                LEFT JOIN role 
                ON employee.role_id = role.id
                LEFT JOIN department 
                ON role.department_id = department.id 
                LEFT JOIN employee manager 
                ON employee.manager_id = manager.id;`;

          db.query(sql, (err, res) => {
            if (err) throw err;
            console.table(res);
            promptUser.promptUser();
        });
  }
  
  function addEmployee(){
    inquirer
    .prompt([
      {
        type: "text",
        message: "What is the employees first name: ",
        name: 'newFirstName'
      },
      {
        type: "text",
        message: "What is the employees last name: ",
        name: 'newLastName'
      },
      {
        type: "text",
        message: "What is the employees role ID: ",
        name: 'newRoleID'
      },
      {
        type: "text",
        message: "What is thier manager's id: ",
        name: 'newManagerID'
      },
    ]).then( function (answer){
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answer.newFirstName}', '${answer.newLastName}', '${answer.newRoleID}', '${answer.newManagerID}');`;
          db.query(sql, (err, res) => {
            if (err) throw err;
            console.table(res);
            promptUser.promptUser();
        });
    })
  }
  
  function updateEmployeeRole(){
    inquirer
    .prompt([
      {
        type: "text",
        message: "What is the ID of the Employee you would like to atler: ",
        name: 'alteredEmployee'
      },
      {
        type: "text",
        message: "What is this employees new role ID: ",
        name: 'alteredRoleID'
      }
    ]).then( function (answer){
      const sql = `UPDATE employee SET role_id = '${answer.alteredRoleID}' WHERE id = '${answer.alteredEmployee}'`;
          db.query(sql, (err, res) => {
            if (err) throw err;
            console.table(res);
            promptUser.promptUser();
        });
    })
    
  }

  exports.allEmployees = allEmployees;
  exports.addEmployee = addEmployee;
  exports.updateEmployeeRole = updateEmployeeRole;