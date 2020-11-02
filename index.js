const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a discription of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give installation instructions for the project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information.'
    },
    {
        type: 'list',
        name: 'license',
        message: ''
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter your contribution guidelines.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please give any testing instructions.'
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    return inquirer.prompt(questions);
    
}

// function call to initialize program
init();
