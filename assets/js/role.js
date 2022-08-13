const inquirer = require("inquirer");
const db = require("../../db/connection");
const promptUser = require('../../app')
const cTable = require('console.table');

function allRoles(){
    const sql = `SELECT * FROM role`;
          db.query(sql, (err, res) => {
            if (err) throw err;
            console.table(res);
            promptUser.promptUser();
          });
  }
  
  function addRole(){
    inquirer
    .prompt([
      {
        type: "text",
        message: "What is the name of this new role: ",
        name: 'newRole'
      },
      {
        type: "text",
        message: "What is the salary of this new roll: ",
        name: 'newRoleSalary'
      },
      {
        type: "text",
        message: "What is the ID of this role department: ",
        name: 'newRoleDepartment'
      }
    ]).then( function (answer){
      const sql = `INSERT INTO role (title, salary, department_id) VALUES ('${answer.newRole}', '${answer.newRoleSalary}', '${answer.newRoleDepartment}');`;
          db.query(sql, (err, res) => {
            if (err) throw err;
            console.table(res);
            promptUser.promptUser();
        });
    });
  
  }

exports.allRoles = allRoles;
exports.addRole = addRole;