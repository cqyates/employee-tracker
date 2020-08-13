# employee-tracker

#### Attack Plan.
* ~~create SCHEMA~~
* ~~insert dummy data in MYSQL workbench~~
* ~~create repo~~
* ~~clone repo and build folder structure~~
* ~~git init and get packages (inquirer)~~
* ~~add SCHEMA.sql and seeds.sql files~~
* ~~create a server.js page~~
* ~~npm install mySQL~~
* ~~npm install dotenv and hide MySQL password in hidden .env file~~
* ~~Connect MySQL database~~
* ~~Test database connection with simple select * query~~
* ~~break out connection into it's own connection.js file~~
* ~~npm install util package to wrap query in a promise~~
* ~~npm install console.table~~
* ~~set up constructor for mySQL queries~~
* ~~connect constructor to mySQL connection~~
* ~~test with SELECT * FROM department~~
* ~~set up inquirer.prompt and switch statements~~
* ~~write constructor functions to get all departments, roles and employees~~
* ~~write placeholder functions to call in switch statement~~
* ~~add create department, create employee and create new role to inquirer prompt~~
* ~~add above to switch statements~~
* ~~add to constructor~~
* ~~write functions in server.js page~~
* ~~write additional prompts for the information we need to add to database~~
* ~~add validation to input fields~~
* ~~create for loops that pull up departments by name~~
* ~~test creation of departments, roles and employees~~

* ~~alter flow so intial questions asks if you would like to work with employees, positions or departments~~

** for each new option follow these steps. (ie Find_Roles_By_Department)
  - add the selection to the array for the question, "what would you like to do?"
  - add to switch statement
  - write function that console.logs the job of the function as a string
  - go to constuctor and create method to interact with mySQL database
  - call the method in the function either printTable or call the View_All function for that table type.
  - test 
