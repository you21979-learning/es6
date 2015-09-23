"use strict"

var co = require("co");

let delay = (str) => {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(str);
        }, 1000);
    });
}

let f = function*(){
    console.log("a")
    let str1 = yield delay("async1")
    let str2 = yield delay("async2")
    let str3 = yield delay("async3")
    console.log("b")
    console.log(str1)
    console.log(str2)
    console.log(str3)
}


let f2 = function*(){
    console.log("a")
    let strs = yield Promise.all([delay("async1"), delay("async2"), delay("async3")])
    console.log("b")
    console.log(strs)
}


co(f).then(function(){
    console.log("ok");
})
co(f2).then(function(){
    console.log("ok2");
})

