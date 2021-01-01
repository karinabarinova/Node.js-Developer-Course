//CRUD - create read update and delete operations
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager'; //any name

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error)
        return console.log('Unable to connect to database');

    const db = client.db(databaseName);
    
    //read/find/findOne data from the database
    db.collection('users').findOne({_id: new ObjectID('5fef828cf4e6e11fdc9f52ae')}, (error, user) => {
        if (error)
            return console.log('Unable to fetch');
        console.log(user);
    })

    db.collection('users').find({age: 24}).toArray((error, users) => {
        if (error)
            return console.log('Unable to fetch users');
        console.log(users);
    })
    db.collection('users').find({age: 24}).count((error, count) => {
        if (error)
            return console.log('Unable to count users');
        console.log(count);
    })
    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        if (error)
            console.log('Unable to fetch tasks');
        console.log(tasks);
    })
    db.collection('tasks').findOne({_id: new ObjectID("5fef7f4aaf51710ec0faabc2")}, (error, task) => {
        if (error)
            return console.log('Unable to fetch task');
        console.log(task);
    })
})
