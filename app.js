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
          "Add Department",
          "Quit"
        ],
        name: "menu"
      }
    ])
    .then(function ({ menu }) {
      if (menu == "View all Employees"){
        allEmployees();
      }
      else if(menu == "Add Employee"){
        addEmployee();
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
        process.exit()
      }
    })
}

// -------------------------  employee functions -------------------------------------
function allEmployees(){
  const sql = `SELECT * FROM employee`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          promptUser();
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
          promptUser();
      });
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

// -------------------------  department functions -------------------------------------
function allDepartments(){
  const sql = `SELECT * FROM department`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          promptUser();
        });
}

promptUser();