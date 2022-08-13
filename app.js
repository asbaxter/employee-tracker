const inquirer = require("inquirer");
const db = require("./db/connection");
const cTable = require('console.table');

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
          "Add Department"
        ],
        name: "menu"
      }
    ])
    .then(function ({ menu }) {
      if (menu == "View all Employees"){
        allEmployees();
      }
      else if(menu == "Add Employee"){
        console.log("add employee coming soon")
      }
      else if(menu == "Update Employee Role"){
        console.log("Update Employee role comming soon")
      }
      else if(menu == "View all Roles"){
        allRoles();
      }
      else if(menu == "Add Role"){
        console.log("add rolle coming soon");
      }
      else if (menu == "View all Departments"){
        allDepartments();
      }
      else if(menu == "Add Department"){
        console.log("add deparment coming soon")
      }
      else {
        console.log("How did you even select an invalid option?")
      }
    })
}

function allEmployees(){
  const sql = `SELECT * FROM employee`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          promptUser();
      });
}

function allRoles(){
  const sql = `SELECT * FROM role`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          promptUser();
        });
}

function allDepartments(){
  const sql = `SELECT * FROM department`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          promptUser();
        });
}

promptUser();