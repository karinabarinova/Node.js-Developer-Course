const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();// new express application
const port = process.env.PORT || 3000;

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
    if (!req.query.address)
        return res.send({
            error: "You must provide an address"
        })
    
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error)
            return res.send({ error });
        forecast(latitude, longitude, (error, forecastData) => {
            if (error)
                return res.send({ error });
            res.send({
                location,
                forecast: forecastData,
                address: req.query.address
            })
        })  
    });
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help article not found',
        name: 'Karina'
    });
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Not Found',
        name: 'Karina'
    });
})
app.listen(port, () => {
    console.log('Server is up on port ' + port);
})