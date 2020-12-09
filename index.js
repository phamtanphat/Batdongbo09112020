let a;
xuLy(a , (number) => {
    let b = 10;
    let c = number + b ;
    console.log(c)
})

function xuLy(number , cb) {
    setTimeout(() => {
        number = 10;
        cb(number);
    },2000)
}