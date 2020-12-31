const path = require('path');
const express = require('express');

const publicDir = path.join(__dirname, '../public');
const app = express();// new express application
app.use(express.static(publicDir));
//app.com - root route
//app.com/help - help route
//app.com/about - about route

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