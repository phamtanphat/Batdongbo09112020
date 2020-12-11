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
// function getTempCity(cityName , cb) {
//     const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`;
//     request(URL, {json : true} ,function (error, response, body) {
//         if (error) return cb(error)
//         if (body.cod !== 200) return cb(body.message)
//         return cb(null , body.main.temp)
//     });
// }

// getTempCity('Hanoi 2321',(error , temp) => {
//     console.log(error || temp)
// })



function tru(a , b , cb) {
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`;
        request(URL, {json : true} ,function (error, response, body) {
            if (error) return reject(error)
            if (!body.success) return reject(body.message)
            return resolve(body.message)
        });
    })
}
function nhan(a , b) {
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`;
        request(URL, {json : true} ,function (error, response, body) {
            if (error) return reject(error)
            if (!body.success) return  reject(new Error("Lỗi do phương thức nhân"))
            return resolve(body.message)
        });
    })
}
function chia(a , b , cb) {
    const URL = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`;
    request(URL, {json : true} ,function (error, response, body) {
        if (error) return cb(error)
        if (!body.success) return cb(body.message)
        return cb(null , body.message)
    });
}

function cong(a , b ) {
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`;
        request(URL, {json : true} ,function (error, response, body) {
            if (error) return reject(error)
            if (!body.success) return reject(new Error("Lỗi do phương thức cộng"))
            return resolve(body.message)
        });
    })
}

// cong(5,5)
// .then(value => nhan(value , 'a'))
// .then(tich => console.log(tich))
// .catch(error => console.log(error))

// cong( 5 , 5 , (error , tong) => {
//     if (error) return console.log(error)
//     nhan(tong , 'a' , (errorTich , Tich) => {
//         if (errorTich) return console.log(errorTich)
//         return console.log(Tich)
//     })
// })
function tinh(a , b){
    return a+ b
}

async function xuLy(){
    try {
        const tong = await cong('a',5);
        const tich = await nhan(tong , 2);
    } catch (error) {
        console.log(error)
    }
    
}
xuLy()