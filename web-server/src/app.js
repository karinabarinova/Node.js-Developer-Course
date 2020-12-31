const express = require('express');

const app = express();// new express application

//app.com - root route
//app.com/help - help route
//app.com/about - about route

app.get('/', (req, res) => { //res it to be set up to send back to a requestor
    res.send('<h1>Weather</h1>'); //send something back to the requestor
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Karina',
        age: 24
    });
})

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>');
})

app.get('/weather', (req, res) => {
    res.send([
        {
            location: 'New York'
        },
        {
            forecast: 'Cloudy'
        }
    ]);
})
app.listen('3000', () => {
    console.log('Server is up on port 3000');
})