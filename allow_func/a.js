"use strict"

let power = n => n * n

let main = n => {
    let xs = [1,2,3,4,5,6,7,8,9,10];
    let ys = xs.map( power )
    let z = xs.reduce( (x,y) => x + y )
    console.log(xs)
    console.log(ys)
    console.log(z)
}

main();
