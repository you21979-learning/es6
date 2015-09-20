"use strict"
let test = () => {
    return new Promise((resolve, reject)=>{
        resolve(1)
    })
}
let main = () => {
    test().then(x=>console.log(x))
}

main()
