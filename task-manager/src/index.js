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
