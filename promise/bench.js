"use strict"
const Promise = require("bluebird")
const test = (n,x) => new Promise( (resolve, reject) =>
    setTimeout( ()=>resolve(x), n)
    //resolve(x)
)

const main = () => {
    let xs = [];
    for(let i=0;i<100000;++i) xs.push(test(0,0))

    console.time("x")
    Promise.all(xs).then(x=>console.timeEnd("x"))
}

main()
