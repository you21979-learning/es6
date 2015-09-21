"use strict"
let test = (n,x) => new Promise( (resolve, reject) =>
    setTimeout( ()=>resolve(x), n)
)

let main = () => {
    Promise.all([
        test(1000, 1),
        test(1500, 2),
        test(500, 3)
    ]).then(x=>console.log(x))
}

main()
