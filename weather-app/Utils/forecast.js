const request = require('request');

const forecast = (latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/14ca8beee7b5101972be43af6264878d/ ' + latitude + ',' + longitude + ' ?'
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect', undefined)
        } else if (body.error){
            callback(' Unable to find forecast', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain `
            )
        }
    })
}




module.exports = forecast