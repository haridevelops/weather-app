const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv[2] == null || process.argv[2] == undefined) {
    console.log('Please input the location to check weather');
    return;
}

geocode.getGeoCode(process.argv[2], (err, { latitude, longitude, location }) => {
    if (err) return console.log('error ', err);
    forecast.getForeCast(latitude, longitude, (err, response) => {
        if (err) console.log('error ', err);
        console.log(response);
    })
})