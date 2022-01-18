const validator = require('validator')
const chalk = require('chalk')

console.log(chalk.green.bold.inverse('Success!'));
const getNotes = require('./notes');

const value = getNotes();

console.log(value);

console.log(validator.isEmail('quanlidavid@gmail.com'))
console.log(validator.isURL('https://dsadsad'))



// const validator = require('validator')

// const getNotes = require('./notes');

// const value = getNotes();

// console.log(value);

// console.log(validator.isEmail('quanlidavid@gmail.com'))
// console.log(validator.isURL('https://dsadsad'))