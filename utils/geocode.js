const request = require('request')

const geocode = function (address, callback) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hha2lsMTkiLCJhIjoiY2p6enZxNG1iMG42ZjNtcjZoN3NlajhocyJ9.aWfY8T3EW4ZRYmr2jHGlWg&limit=1'
    request({ url, json: true }, (err, response) => {
        if (err) {
            callback('Could\'nt connect! We are offline!', undefined)
        } else if (response.body.features.length == 0){
            callback('Could\'nt find any data for the place you are looking for!', undefined)
        }else {
            callback(undefined, response.body)
        }
    })
}


module.exports = geocode;