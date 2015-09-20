"use strict"
let test = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(=>
        resolve(1)
,1)
    })
}
let main = () => {
    test().then(x=>console.log(x))
}

main()
