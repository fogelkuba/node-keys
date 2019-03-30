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
            message: 'What text do you want to code?',
            when: function (answers) {
                answers.actionType === 'code'
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

        // console.log('end: ', answers);
    });