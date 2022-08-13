const inquirer = require("inquirer");
const db = require("../../db/connection");
const promptUser = require('../../app')
const cTable = require('console.table');

function allDepartments(){
    const sql = `SELECT * FROM department`;
          db.query(sql, (err, res) => {
            if (err) throw err;
            console.table(res);
            promptUser.promptUser();
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
            promptUser.promptUser();
        });
    });
  }

  exports.allDepartments = allDepartments;
  exports.addDepartment = addDepartment;