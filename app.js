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
        role.allRoles();
      }
      else if(menu == "Add Role"){
        role.addRole();
      }
      else if (menu == "View all Departments"){
        department.allDepartments();
      }
      else if(menu == "Add Department"){
        department.addDepartment();
      }
      else {
        process.exit()
      }
    })
}

promptUser();

exports.promptUser = promptUser;