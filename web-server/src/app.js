const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();// new express application

// Define paths for express congig
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')
//set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
//setup static directory serve
app.use(express.static(publicDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Karina'
    }); //renders a view
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Karina'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: "How can I help you?",
        title: 'Help',
        name: 'Karina'
    });
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