const express = require('express');

const app = express();// new express application

//app.com - root route
//app.com/help - help route
//app.com/about - about route

app.get('/', (req, res) => { //res it to be set up to send back to a requestor
    res.send('Hello express'); //send something back to the requestor
})

app.get('/help', (req, res) => {
    res.send('Help page');
})

app.get('/about', (req, res) => {
    res.send('About page');
})

app.get('/weather', (req, res) => {
    res.send('Weather page');
})
app.listen('3000', () => {
    console.log('Server is up on port 3000');
})