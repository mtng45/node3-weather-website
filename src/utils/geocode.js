const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibXRuZyIsImEiOiJjazFkczQ3ZnMwYmZzM25tbWtuZTRiZmlqIn0.lF1bn3kHdD3t88vrBhceYQ`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (!body.features.length) {
      callback('Unable to find features', undefined)
    } else {
      const { center, place_name } = body.features[0]
      callback(undefined, {
        latitude: center[1], 
        longitude: center[0],
        location: place_name,
      })
    }
  })
}

module.exports = geocode
