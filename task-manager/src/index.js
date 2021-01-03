const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); //automatically parse 
//incoming json to an object to access it in our request handlers
//req.body
app.use(userRouter); //registered routers
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
    // const task = await Task.findById('5ff1b3e661beb44b709efde9');
    // await task.populate('owner').execPopulate();
    // console.log(task.owner);

    const user = await User.findById('5ff1b3cc61beb44b709efde6');
    await user.populate('tasks').execPopulate();
    console.log(user.tasks)


}//relationshio between two models

main();