//CRUD - create read update and delete operations

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager'; //any name

const id = new ObjectID();
console.log(id);
console.log(id.toHexString().length);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error)
        return console.log('Unable to connect to database');

    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 27
    // }, (error, result) => {
    //     if (error)
    //         return console.log('Unable to insert user');
    //     console.log(result.ops);
    // }); // insert one user
    // db.collection('tasks').insertMany([
    //     {
    //     description: 'Finish homework',
    //     completed: true
    // }, {
    //     description: "Pay bills",
    //     completed: false
    // }, {
    //     description: 'Clean the bathroom',
    //     completed: false
    // }], (error, result) => {
    //     if (error)
    //         return console.log('Unable to insert tasks');
    //     console.log(result.ops);
    // })//insert many

})
