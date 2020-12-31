const request = require('postman-request');
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=9278d1fa382a84c68cca4bd8b3e4d932&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//     if (error)
//         console.log('Unable to connect to whather service');
//     else if (response.body.error)
//         console.log('Unable to find location');
//     else {
//         const data = response.body.current;
//         console.log(`${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out`); // Fahrenheit   
//     }
// })

// const geocodeUrl = "http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2Jhcmlub3ZhIiwiYSI6ImNramEyYTRneDdhM2wyeXFqbG9qb2MwcHIifQ.J-qnGRyD3GJmr6aQm597cg&limit=1";

// request({url: geocodeUrl, json: true}, (error, response, body) => {
//     if (error) {
//         console.log('Unable to connect to location service');
//     } else if (body.message) {
//         console.log('Location not found');
//     } else {
//         const features = body.features;
//         console.log(`Longitude is ${features[0].center[0]};\nLatitude is ${features[0].center[1]}`);
//     }   
// })



geocode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('data', data);
});