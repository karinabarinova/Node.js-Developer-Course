require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5ff067d2362e7d44c89300ff').then((deleted) => {
    console.log(deleted);
    return Task.countDocuments({completed: false});
}).then((tasks) => {
    console.log(tasks);
}).catch((e) => {
    console.log(e);
})

