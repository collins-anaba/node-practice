const request = require('request');
const geocode = require('./Utils/geocode')
const forecast = require('./Utils/forecast')

// const url = 'https://api.darksky.net/forecast/14ca8beee7b5101972be43af6264878d/37.8267,-122.4233?'

// request({url: url, json: true}, (error, response)=> {
// console.log( `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain `)
// })





geocode("Dallas", (error,data)=> {
console.log('Error', error)
console.log('Data', data)
})

forecast (-96.7969, 32.7763, (error,data)=> {
console.log('Error', error)
console.log('Data', data)
})