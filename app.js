const inquirer = require("inquirer");
const db = require("./db/connection");
const cTable = require('console.table');

function promptUser(){
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do:",
        choices: ["View all Employees", "View all Roles", "View all Departments"],
        name: "menu"
      }
    ])
    .then(function ({ menu }) {
      if (menu == "View all Employees"){
        const sql = `SELECT * FROM employee`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          promptUser();
      });
      }
      else if(menu == "View all Roles"){
        const sql = `SELECT * FROM role`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          promptUser();
      });
      }
      else if (menu == "View all Departments"){
        const sql = `SELECT * FROM department`;
        db.query(sql, (err, res) => {
          if (err) throw err;
          console.table(res);
          promptUser();
        });
      }
      else {
        console.log("How did you even select an invalid option?")
      }
    })
}

promptUser();