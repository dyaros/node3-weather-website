const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=78d13d5e6bcc9d734e880cf1aae46b0e&query=' + longitude + ',' + latitude + '&units=f'
    request({url, json:true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined,    
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike +  ' degrees out. The humidity is ' + body.current.humidity + '%.'
            )
        }

    })

}

module.exports = forecast

