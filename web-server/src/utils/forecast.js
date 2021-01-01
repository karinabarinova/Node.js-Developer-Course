const request = require('postman-request');

const forecast = (longtitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9278d1fa382a84c68cca4bd8b3e4d932&query=' + latitude + ',' + longtitude; //&units=f

    request({url, json: true}, (err, { body }) => {
        if (err)
            callback('Unable to connect to weather service', undefined);
        else if (body.error)
            callback('Unable to find location', undefined);
        else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out`)
        }
    })
}

module.exports = forecast;