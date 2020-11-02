const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const Choices = require('inquirer/lib/objects/choices');

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
        message: 'What type of license does this project have?',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "EPL 1.0", "MPL 2.0", "None"]
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
writeToFile = data => {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) throw new Error(err);
    })
}

// function to initialize program
init = () => {
    return inquirer.prompt(questions)
        .then(responses => {
            console.log(responses);
            return generateMarkdown(responses);
        }).then(readmePage => {
            return writeToFile(readmePage)
        }).catch(err => {
            console.log(err);
        });

}

// function call to initialize program
init();
