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
const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=Hanoi';
request(URL, function (error, response, body) {
    console.log(body);
});

getTempCity(cityname , cb())