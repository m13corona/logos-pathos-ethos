const fs = require ('fs');
const inquirer = require('inquirer');

const { generateLogo } = require ('./Lib')

function userQuestions() {
    return inquirer.prompt([

{
    type: 'input',
    name: 'text',
    message: 'Please enter three characters maximum',
},

{

    type: 'input',
    name: 'color',
    message: 'Please enter text color',

},

{
    type: 'list',
    name: 'shape',
    message: 'Please choose between: circle, triangle, and square',
    choices: ['cicle', 'triangle', 'square']



}



    ])


}