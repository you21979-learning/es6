"use strict"

class Hoge {
    constructor(age){
        this.age = age
    }
    poke(){
        return this.age + " years old"
    }
}

let h = new Hoge(20);
console.log(h)
console.log(h.poke())

