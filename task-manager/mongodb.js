//TO DO: delete

//CRUD - create read update and delete operations
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager'; //any name

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error)
        return console.log('Unable to connect to database');

    const db = client.db(databaseName);
    
    // db.collection('users').deleteMany({
    //     age: 24
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error);
    // })
    db.collection('tasks').deleteOne({
        _id: new ObjectID('5fef7f4aaf51710ec0faabc0')
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})
