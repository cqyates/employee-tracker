const { prompt } = require('inquirer');
const DB = require('./db/DB');
require('dotenv').config();
require('console.table');

function promptUser() {
  prompt([
    {
      type: 'list',
      name: 'direction',
      message: 'What would you like to do?',
      choices: [
        'View All Employees',
        'View All Departments',
        'View All Roles',
        'Exit',
      ],
    },
  ]).then((answer) => {
    switch (answer.direction) {
      case 'View All Employees':
        View_All_Employees();
        break;
      case 'View All Departments':
        View_All_Departments();
        break;
      case 'View All Roles':
        View_All_Roles();
      default:
        goodBye();
    }
  });
}
function View_All_Employees() {
  console.log('Here is your full roster of employees');
  DB.findAllEmployees().then(function (response) {
    console.table(response);
    promptUser();
  });
}
const View_All_Departments = () => {
  console.log('Here are the active departments:');
  DB.findAllDepartments().then(function (res) {
    console.table(res);
    promptUser();
  });
};
const View_All_Roles = () => {
  console.log('Here are the current roles for your organization');
  DB.findAllRoles().then((data) => {
    console.table(data);
    promptUser();
  });
};
function goodBye() {
  console.log('Thanks for using the Employee Tracker, We keep track!');

}
promptUser();
