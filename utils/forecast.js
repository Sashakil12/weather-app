const request = require('request');


const forecast = (lattitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a14f6f456bfe35627642f442cc6fedf0/' + encodeURIComponent(lattitude) + ',' + encodeURIComponent(longitude)
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Could not connect! We are offline", undefined)
        } else if (response.body.error) {
            callback("Errror ; Code: " + response.body.code + " What happened is: " + response.body.error, undefined)
        } else {
            callback(undefined, response.body.currently)
        }
    })
}

module.exports = forecast