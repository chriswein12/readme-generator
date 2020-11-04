const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const Choices = require('inquirer/lib/objects/choices');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubNameInput => {
            if (githubNameInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email address!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project.',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your project title!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of the project.',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter a description of your project!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give installation instructions for the project.',
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Please give installation instructions for the project!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information.',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please give usage information for the project!');
              return false;
            }
        }
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
        message: 'Please enter your contribution guidelines.',
        validate: contributingInput => {
            if (contributingInput) {
              return true;
            } else {
              console.log('Please give contributing information for the project!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please give any testing instructions.',
        validate: testingInput => {
            if (testingInput) {
              return true;
            } else {
              console.log('Please give testing instructions for the project!');
              return false;
            }
        }
    },
];

// function to write README file
writeToFile = data => {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) throw new Error(err);
    })
    console.log("README.md has been created.")
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
