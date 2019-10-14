const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/5e626dd2819db395be4eb5253f8edc51/${latitude},${longitude}`

  request({ url, json: true}, (error, { body }) => {
    const { error: responseError } = body
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (responseError) {
      callback('Unable to find location', undefined)
    } else {
      const { currently: { temperature, precipProbability }, daily } = body
      callback(undefined, `${daily.data[0].summary} it is currently ${temperature} degrees out. there is a ${precipProbability}% chance of rain.
      `)
    }
  })
}

module.exports = forecast
