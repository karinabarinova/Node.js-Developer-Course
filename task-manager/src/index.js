const express = require('express');
require('./db/mongoose')
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); //automatically parse 
//incoming json to an object to access it in our request handlers
//req.body

//endpoints creation
app.post('/users', async (req, res) => {
    const user = new User(req.body);
    
    try {
        await user.save()
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
})

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
})

//reading endpoints
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send();
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if (!user)
            return res.status(404).send();
        res.send(user);
    } catch (e) {
        res.status(500).send();
    }
})

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send();
    }
})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        if (!task)
            return res.status(404).send();
        res.send(task);
    } catch (e) {
        res.status(500).send();
    }
})

//updating endpoints
app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    const _id = req.params.id;

    if (!isValidOperation)
        return res.status(404).send({error: 'Invalid updates!'});

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        if (!user)
            return res.status(404).send();
        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
})

app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    const _id = req.params.id;
    if (!isValidOperation)
        return res.status(404).send({error: 'Invalid updates'});
    
    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true});
        if (!task)
            res.status(404).send();
        res.send(task);
    } catch (e) {
        res.status(400).send(e);
    }
})

//deleting endpoints
app.delete('/users/:id', async(req, res) => {
    const _id = req.params.id;

    try {
        const deletedUser = await User.findByIdAndDelete(_id);
        if (!deletedUser)
            return res.status(404).send();
        res.send(deletedUser);
    } catch (e) {
        res.status(500).send(e);
    }
})

app.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const deletedTask = await Task.findByIdAndDelete(_id);
        if (!deletedTask)
            return res.status(404).send();
        res.send(deletedTask);
    } catch (e) {
        res.status(500).send(e);
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})