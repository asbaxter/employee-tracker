const inquirer = require("inquirer");
const db = require("./db/connection");
const cTable = require('console.table');
const employee = require('./assets/js/employee');
const department = require('./assets/js/department');
const role = require('./assets/js/role');

function promptUser(){
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do:",
        choices: [
          "View all Employees",
          "Add Employee",
          "Update Employee Role",
          "View all Roles",
          "Add Role",
          "View all Departments",
          "Add Department",
          "Quit"
        ],
        name: "menu"
      }
    ])
    .then(function ({ menu }) {
      if (menu == "View all Employees"){
        employee.allEmployees();
      }
      else if(menu == "Add Employee"){
        employee.addEmployee();
      }
      else if(menu == "Update Employee Role"){
        employee.updateEmployeeRole();
      }
      else if(menu == "View all Roles"){
        allRoles();
      }
      else if(menu == "Add Role"){
        addRole();
      }
      else if (menu == "View all Departments"){
        allDepartments();
      }
      else if(menu == "Add Department"){
        addDepartment();
      }
      else {
        process.exit()
      }
    })
}

// -------------------------  role functions -------------------------------------
function allRoles(){
  const sql = `SELECT * FROM role`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          promptUser();
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
          promptUser();
      });
  });

}

// -------------------------  department functions -------------------------------------
function allDepartments(){
  const sql = `SELECT * FROM department`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          promptUser();
        });
}

function addDepartment(){
  inquirer
  .prompt([
    {
      type: "text",
      message: "What is the name of this new department",
      name: 'newDepartment'
    },
  ]).then( function (answer){
    const sql = `INSERT INTO department (name) VALUES ('${answer.newDepartment}');`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          promptUser();
      });
  });


}

promptUser();

exports.promptUser = promptUser;