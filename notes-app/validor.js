const validator = require('validator');

console.log(validator.isEmail('karina@gmail.com'));
console.log(validator.isURL('https://mead')); //false 
console.log(validator.isIP('127.0.0.1'));
console.log(validator.isMobilePhone('+380630000000'));
