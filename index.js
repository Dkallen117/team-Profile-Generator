const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let assembledTeamArray = [];

function startProjectName() {
    inquirer.prompt([
        {
            message: "/////////Time to Generate Your Team! Please write your the name of your project://///////",
            name: "projectname"
        }
    ])
        .then(function(data){
            const projectName = data.projectname
            assembledTeamArray.push(projectName)
            addManager();
        })

    
}

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

    type: "number",
    message: "What is your team manager's office number?",
    name: "officeNum"

}

])

    .then(function(data){

    const id = 1;
    const name = data.name;
    const email = data.email;
    const officeNum = data.officeNum;
    const projectMember = new Manager(name, id, email, officeNum);
    assembledTeamArray.push(projectMember);
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
            finalTeam();
            break;


    };
    

}) 

.catch(err => console.log(err));

};

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

    


    ])

    .then(function(data){
        const name = data.name;
        const id = assembledTeamArray.length + 1;
       
        const email = data.email;
        const github = data.github;
        const projectMember = new Engineer(name, id, email, github);
        assembledTeamArray.push(projectMember);
        additionalTeamMems();


    })

    .catch(err => console.log(err));

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

        message: "What is the intern's school?",
        name: "school"

    }

    


    ])

    .then(function(data){

        const id = assembledTeamArray.length + 1;
        const name = data.name;
        const email = data.email;
        const school = data.school;
        const projectMember = new Intern(name, id, email, school);
        assembledTeamArray.push(projectMember);
        additionalTeamMems();


    })

    .catch(err => console.log(err));

}

function finalTeam(){

    const htmlSectionsArray = [];
    const htmlTop = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${assembledTeamArray[0]}</title>
    <!-- Font Awesome -->
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    />
    <!-- Google Fonts -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <!-- Bootstrap core CSS -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <!-- Material Design Bootstrap -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../dist/style.css">
</head>

<body>

<header>
 
<!-- Container for header  -->
<div class="row" id="top-Section">

<h1>${assembledTeamArray[0]}</h1>


</div>

</header>

<main class="container">


  <div class="row">
  
  `

  htmlSectionsArray.push(htmlTop);

  for (let i =1; i < assembledTeamArray.length; i++){


    let newEmployee = `<div class="card">
    <div class="card-body">
      <h5 class="card-title">${assembledTeamArray[i].name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        
        <li class="list-group-item">${assembledTeamArray[i].title}</li>
        <li class="list-group-item">Employee ID: ${assembledTeamArray[i].id}</li>
        <li class="list-group-item">Email: <a href="mailto:${assembledTeamArray[i].email}">${assembledTeamArray[i].email}</a></li>
        <li class="list-group-item">Phone: ${assembledTeamArray[i].officeNum}</li>
      `
    //   if (assembledTeamArray[i].officeNum) {
    //     newEmployee += `
        
    //     `
    //     }

      if (assembledTeamArray[i].github) {
        newEmployee += `
        <li class="list-group-item">GitHub: <a href="https://github.com/${assembledTeamArray[i].github}">${assembledTeamArray[i].github}</a></li>
            `
        }

      if (assembledTeamArray[i].school) {
        newEmployee += `
        <li class="list-group-item">School: ${assembledTeamArray[i].school}</li>
            `
        }

    newEmployee +=`
        </ul>
        
    
    </div>
    
    `
    htmlSectionsArray.push(newEmployee);

  }

  const htmlBottom = `
  </div>
  </main>
  </body>
  </html>
  `
  htmlSectionsArray.push(htmlBottom);

  fs.writeFile(`./generated-html/${assembledTeamArray[0]}.html`, htmlSectionsArray.join(""), function (err) {

    console.log("created");
      
  })
}

startProjectName();




