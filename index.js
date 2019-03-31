const inquirer = require('inquirer');
const crypto = require('./crypto');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'actionType',
            message: 'What action do You want ot perform?',
            choices: ['code', 'decode']
        },
        {
            type: 'input',
            name: 'codeText',
            message: 'What text do you want to code?',
            when: function (answers) {
                return answers.actionType == 'code'
            }
        },
        {
            type: 'input',
            name: 'decodeText',
            message: 'Enter text to decode?',
            when: function (answers) {
                return answers.actionType == 'decode'
            }
        },
        {
            type: 'input',
            name: 'decodeKey',
            message: 'Enter text to decode?',
            when: function (answers) {
                return answers.actionType == 'decode'
            }
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Are you sure?',
            default: true
        },

    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        // console.log(answers);
        
        // console.log(crypto);

        console.log('end: ', answers);
        crypto.init(answers.codeText)
    });