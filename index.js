// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the name of the project?",
    name: "Title",
    validate: (value) => { if (value) {return true} else {return 'Please enter something'}},
}, {
    type: "input",
    message: "How would you describe the purpose of the project?",
    name: "Description",
    validate: (value) => { if (value) {return true} else {return 'Please enter something'}},
}, {
    type: "input",
    message: "What are the dependencies required to install your project?",
    name: "Installation",
    validate: (value) => { if (value) {return true} else {return 'Please enter something'}},
}, {
    type: "input",
    message: "How does a user use this project?",
    name: "Usage",
    validate: (value) => { if (value) {return true} else {return 'Please enter something'}},
}, {
    type: "input",
    message: "Who contributed to the project?",
    name: "Contributing",
    validate: (value) => { if (value) {return true} else {return 'Please enter something'}},
}, {
    type: "input",
    message: "How is the project tested?",
    name: "Testing",
    validate: (value) => { if (value) {return true} else {return 'Please enter something'}},
}, {
    type: "list",
    message: "Are any licenses needed?",
    name: "License",
    choices: [
        'MIT',
        'GPL',
        'GPL3.0',
        'Apache2.0',
        'None'
    ],
}, {
    type: "input",
    message: "Enter your email address",
    name: "Email",
    validate: (value) => { if (value) {return true} else {return 'Please enter something'}},
}, {
    type: "input",
    message: "What is your github username?",
    name: "Github",
    validate: (value) => { if (value) {return true} else {return 'Please enter something'}},
},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((userResponse) => {
        console.log('userResponse:', userResponse);
        writeToFile('generatedReadMe.md', generateMarkdown({ ...userResponse}));
    });
}

// Function call to initialize app
init();