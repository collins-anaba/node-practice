setTimeout( () => {
    console.log('2 seconds are up')
},2000
)

const names  = ['jeff', 'nick', 'tim']
const short = names.filter((name) => {
    return name.length <= 4
})

const geoCode = (address,callback,) => {
   setTimeout( ()=> {
    const data = {
        latitude: 0,
        longitude: 0
    }
callback(data)   },2000)
}

 geoCode('Dallas', ()=>{
    console.log(data)

})