// let a;
// xuLy(a , (number) => {
//     let b = 10;
//     let c = number + b ;
//     console.log(c)
// })

// function xuLy(number , cb) {
//     setTimeout(() => {
//         number = 10;
//         cb(number);
//     },2000)
// }

const request = require('request');

// back tick : `${}`
function getTempCity(cityName , cb) {
    const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`;
    request(URL, {json : true} ,function (error, response, body) {
        if (error) return cb(error)
        if (body.cod !== 200) return cb(body.message)
        return cb(null , body.main.temp)
    });
}

getTempCity('Hanoi 2321',(error , temp) => {
    console.log(error || temp)
})