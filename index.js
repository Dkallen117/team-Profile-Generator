const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let assembledTeamArray = [];

function addManager() {

    inquirer.prompt([

{

    message: "What is your team manager's name?",
    name: "name"

},
{

    message: "What is your team manager's email address?",
    name: "email"

},
{

    message: "What is your team manager's office number?",
    name: "officeNum"

}

])

    .then(function(data){

    const id = 1;
    const name = data.name;
    const email = data.email;
    const officeNum = data.officeNum;
    const projectMember = new Manager(id, name, email, officeNum);
    assembledTeam.push(projectMember);
    additionalTeamMems();

})

}

function additionalTeamMems(){

    inquirer.prompt([

{

    type: "list",
    message: "Would you like to include additional project members?",
    choices: ["Add an Engineer", "Add an Intern", "My team is complete"],
    name: "addTeamData"

}

])

    .then(function(data){

    switch (data.addTeamData){


        case "Add an Engineer":
            addEngineer();
            break;

        case "Add an Intern":
            addIntern();
            break;

        case "My team is complete":
            assembleTeam();
            break;


    }

})

}

function addEngineer(){

    inquirer.prompt([
    
    {

        message: "What is the engineer's name?",
        name: "name"


    },
    {

        message: "What is the engineer's email address?",
        name: "email"

    },
    {

        message: "Whta is the engineer's Github profile?",
        name: "github"

    }

    .then(function(data){

        const id = assembledTeamArray.length++;
        const name = data.name;
        const email = data.email;
        const github = data.github;
        const projectMember = new Engineer(id, name, email, github);
        assembledTeamArray.push(projectMember);
        additionalTeamMems();


    })


    ])

}

function addIntern(){

    inquirer.prompt([
    
    {

        message: "What is the intern's name?",
        name: "name"


    },
    {

        message: "What is the intern's email address?",
        name: "email"

    },
    {

        message: "Whta is the intern's school?",
        name: "school"

    }

    .then(function(data){

        const id = assembledTeamArray.length++;
        const name = data.name;
        const email = data.email;
        const school = data.school;
        const projectMember = new Intern(id, name, email, school);
        assembledTeamArray.push(projectMember);
        additionalTeamMems();


    })


    ])

}