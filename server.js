const { prompt } = require("inquirer")
const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "employeeDB"
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

function promptUser() {
  prompt([{
    type: "list",
    name: "direction",
    message: "What would you like to do?",
    choices: ["View All Employees", "View All Departments", "View All Roles", "Exit"]
  }]).then(answer => {
    switch(answer.direction) {
      case "View All Employees":
        View_All_Employees()
        break;
      case "View All Departments":
        View_All_Departments()
        break;
        case "View All Roles":
          View_All_Roles()
      default:
        goodBye()
    } 
  })
}
function View_All_Employees() {
  console.log("Here is your full roster of employees");
  promptUser()
}
function View_All_Departments() {
  console.log("Here are your active departments");
  promptUser()
}
function View_All_Roles() {
  console.log("Here are the current roles for your organization");
  promptUser()
}
function goodBye() {
  console.log("Thanks for using the Employee Tracker, We keep track!")
}
promptUser()