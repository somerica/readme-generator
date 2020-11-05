const generateMarkdown = require("./generate markdown");
const inquirer = require ('inquirer');
const fs = require('fs');
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);



// array of questions for user
const questions = [
    { 
        type: "input",
        message:"What is the name of your Project?",
        name:"title"
      },
      {
          type:"input",
          message:"Desribe your project",
          name: "description"
      },
      {
          type:"input",
          message:"Table of Contents",
          name: "table of contents"
      },
      {
          type: "input",
          message: "What are the installation instructions?",
          name: "installation"
      },
      {
          type:"input",
          message:"How should it be used?",
          name: "usage"
      },
      {
          type:"input",
          message:"Who contributed to the Project?",
          name:"contributors"
      },
      {
          type:"input",
          message:"What are the test instructions?",
          name: "instructions"
      },

      {
          type:"input",
          message:"What license was used?",
          name:"license"
      },

      {
          type:"input",
          message:" Are there any questions?",
         name: "questions"

      },
      {
          type: "input",
          message: "What is your Github username?",
          name:"username"
      },
      {
          type:"input",
          message:"What is your email address?",
          name:"email"
      },
      
      
];

function promptuser (response){
    return inquirer.prompt(questions)

  }


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
    try {
        const response =  await promptuser()
        console.log(response)
        const readMe = generateMarkdown(response);
        writeFileAsync("README.md", readMe);
        console.log("got it !");
    }catch (err){
        console.log(err);
    }
    }



// function call to initialize program
init();