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
        updateEmployeeRole();
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