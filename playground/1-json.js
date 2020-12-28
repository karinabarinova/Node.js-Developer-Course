const fs = require('fs');

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json'); //read the file and get binary data
const dataJSON = dataBuffer.toString(); // convert binary to a string
const data = JSON.parse(dataJSON); //parse json data to an object
console.log(data.author);
