const inquirer = require("inquirer");
const db = require("./db/connection");

// db.connect((err) => {
//   if (err) throw err;
//   console.log("Database connected.");
//   options();
// });

function promptUser(){
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do:",
        choices: ["View all Employees", "View all Roles", "view all Departments"],
        name: "menu"
      }
    ])
    .then(function ({ menu }) {
      if (menu == "View all Employees"){
        console.log("employee")
      }
      else if(menu == "View all Roles"){
        console.log("roles")
      }
      else {
        console.log("department")
      }
    })


}

promptUser();