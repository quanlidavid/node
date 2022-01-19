const fs = require('fs');
// const { json } = require('node:stream/consumers');
// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// console.log(dataJSON);

// const data = JSON.parse(dataJSON);
// console.log(data);

const dataBuffer = fs.readFileSync('1-json-2.json');
const dataJSONStr = dataBuffer.toString();

const personJSONObj = JSON.parse(dataJSONStr);
personJSONObj.name = 'David';
personJSONObj.age = '23';

console.log(personJSONObj);

const personJSONStr = JSON.stringify(personJSONObj);
fs.writeFileSync('1-json-2.json', personJSONStr);
