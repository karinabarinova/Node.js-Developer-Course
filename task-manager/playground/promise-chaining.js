require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5ff0653f330b7f4200e7df3d', {
    age: 1
}).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1});
}).then((users) => {
    console.log(users);
}).catch((error) => {
    console.log(error);
})