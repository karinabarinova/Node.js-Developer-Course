const request = require('postman-request');

const forecast = (longtitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9278d1fa382a84c68cca4bd8b3e4d932&query=' + latitude + ',' + longtitude + '&units=f';

    request({url: url, json: true}, (err, res) => {
        if (err)
            callback('Unable to connect to weather service', undefined);
        else if (res.body.error)
            callback('Unable to find location', undefined);
        else {
            callback(undefined, `${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degrees out. It feels like ${res.body.current.feelslike} degrees out`)
        }
    })
}

module.exports = forecast;