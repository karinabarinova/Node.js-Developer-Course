require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5ff067d2362e7d44c89300ff').then((deleted) => {
//     console.log(deleted);
//     return Task.countDocuments({completed: false});
// }).then((tasks) => {
//     console.log(tasks);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count;
}

deleteTaskAndCount('5ff067bd1d2410196ce64416').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})

