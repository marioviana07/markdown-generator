const inquirer = inquirer('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const promptUser = [

    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Username!')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your e-mail Address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email Address!')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is your project name? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project name!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short decription of your project: (Required)',
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have? (Check all that apply)',
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'The unlicense'
        ],
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependecies? (Required)',
    },

    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run test? (Required)',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo? (Required)',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contribution to the repo? (Required)',
    },
];


// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();