const inquirer = require('inquirer');
const crypto = require('./crypto');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'actionType',
            message: 'What action?',
            choices: ['code', 'decode']
        },
        {
            type: 'input',
            name: 'textToCode',
            message: 'What text do you wanto to code?',
            when: (answers) => {
                answers.actionType === 'code'
            }
        }

    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers);
        
        console.log(crypto);
        
    });