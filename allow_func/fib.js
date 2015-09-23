"use strict"

//const fib = n => (n === 0) ? 0 : (n < 2) ? 1 : fib(n - 2) + fib(n - 1)

const fib_memolized = (memo) => {
    const fib = n => {
        let result = memo[n];
        if(result === undefined){
            result = (n === 0) ? 0 : (n < 2) ? 1 : fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    }
    return fib;
}
const fib = fib_memolized([]);

const counts = n => Array.from(new Array(n), (x,i) => i)

const main = () => {
    console.log(counts(40).map(v=>fib(v)))
}

main();
