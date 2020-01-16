const request = require('request');

const url = 'https://api.darksky.net/forecast/14ca8beee7b5101972be43af6264878d/37.8267,-122.4233?'

// request({url: url, json: true}, (error, response)=> {
// console.log( `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain `)
// })

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGV0b3gyazIiLCJhIjoiY2s1ZTNweDhhMGJpbTNmbTRqZHJqNzJ2eSJ9.ri0DzXLKi9eieAbbfR7DrQ'

request({url: url2, json: true}, (error,response)=>{
    if (error){
        console.log('Unable to connect')
    } else if (response.body.features.length === 0 ){
         console.log('unable to locate')
    }else {    
    console.log(`${response.body.features[0].center[1]}, ${response.body.features[0].center[0]}`)
}
})
