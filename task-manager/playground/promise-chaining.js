require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5ff0653f330b7f4200e7df3d', {
//     age: 1
// }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1});
// }).then((users) => {
//     console.log(users);
// }).catch((error) => {
//     console.log(error);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAgeAndCount('5ff0653f330b7f4200e7df3d', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});