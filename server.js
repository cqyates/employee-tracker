const inquirer = require('inquirer');
const DB = require('./db/DB');
require('dotenv').config();
const { printTable } = require('console-table-printer');

function promptUser() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'direction',
        message: 'What would you like to do?',
        choices: [
          'View All Employees',
          'View All Departments',
          'View All Roles',
          'Add Department',
          'Add Role',
          'Add Employee',
          'Exit',
        ],
      },
    ])
    .then((answer) => {
      switch (answer.direction) {
        case 'View All Employees':
          View_All_Employees();
          break;
        case 'View All Departments':
          View_All_Departments();
          break;
        case 'View All Roles':
          View_All_Roles();
          break;
        case 'Add Department':
          Add_Department();
          break;
        case 'Add Role':
          Add_Role();
          break;
        case 'Add Employee':
          Add_Employee();
          break;
        default:
          goodBye();
      }
    });
}
function View_All_Employees() {
  console.log('Here is your full roster of employees');
  DB.findAllEmployees().then(function (response) {
    printTable(response);
    promptUser();
  });
}
const View_All_Departments = () => {
  console.log('Here are the active departments:');
  DB.findAllDepartments().then(function (res) {
    printTable(res);
    promptUser();
  });
};
const View_All_Roles = () => {
  console.log('Here are the current roles for your organization');
  DB.findAllRoles().then((data) => {
    printTable(data);
    promptUser();
  });
};
const Add_Department = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the new department?',
      },
    ])
    .then(function (answer) {
      DB.createDepartment(answer.departmentName).then((response) => {
        console.log(response);
        View_All_Departments();
      });
    });
};
const Add_Role = () => {
  console.log('add role here');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'what is the title for this role?',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for this position?',
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            return true;
          }
          return 'Please enter a positive number greater than zero.';
        },
      },
      {
        type: 'list',
        name: 'departmentID',
        message: 'Which department is assigned this position',
        choices: ['1', '2', '3', '4'],
        // create a for loop over the different departments
      },
    ])
    .then((answers) => {
      DB.createRole(answers.title, answers.salary, answers.departmentID).then(
        function (response) {
          console.log(response);
          View_All_Roles();
        }
      );
    });
};
const Add_Employee = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?",
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return 'Please do not leave this field blank';
        }
      },
      {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?",
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return 'Please do not leave this field blank';
        }
      },
      {
        type: 'list',
        name: 'roleID',
        message: "what is this employee's position?",
        choices: ['1', '2', '3', '4']
      }
    ])
    .then(function(answers) {
      DB.createEmployee(
        answers.firstName,
        answers.lastName,
        answers.roleID
      ).then(function (response) {
        console.log(response);
        View_All_Employees();
      });
    });
};
function goodBye() {
  console.log('Thanks for using the Employee Tracker, We keep track!');
}
promptUser();
