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

const jwt = require('jsonwebtoken');

const myFunc = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismysecret', { expiresIn: '7 days' });
    console.log(token);
    const data = jwt.verify(token, 'thisismysecret' );
    console.log(data);
}

myFunc();