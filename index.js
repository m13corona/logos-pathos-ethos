const fs = require ('fs');
const inquirer = require('inquirer');


const questions = [

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
    choices: ['circle', 'triangle', 'square']

},

{
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter shape color'
}

];


inquirer.prompt(questions)
  .then(answers => {
    console.log('answers', answers);
   })
 .catch(error => {
     console.log('error', error);
    })

  