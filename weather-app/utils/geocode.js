const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2Jhcmlub3ZhIiwiYSI6ImNramEyYTRneDdhM2wyeXFqbG9qb2MwcHIifQ.J-qnGRyD3GJmr6aQm597cg&limit=1';
    if (!address) 
        return callback('Missing address', undefined);
    request({url, json: true}, (err, { body }) => {
        if (err)
            callback('Unable to connect to location services!', undefined);
        else if(body.features.length === 0) {
            callback('Location not found, try another search', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;