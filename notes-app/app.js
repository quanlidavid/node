const validator = require('validator')

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