//HTTP requests without a library

const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=9278d1fa382a84c68cca4bd8b3e4d932&query=45,-75&units=f';

const request = http.request(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk.toString();
    })// on - allows to register a handler. run one or multiple times

    res.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log("An error", error);
})

request.end();
