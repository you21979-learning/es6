"use strict"

const memoizer = (memo , fundamental) => {
    const shell = n => memo[n] === undefined    ? memo[n] = fundamental(shell, n)
                                                : memo[n]
    return shell;
}

const fib = memoizer({}, (shell,n) => (n === 0) ? 0 : (n < 2) ? 1 : shell(n - 2) + shell(n - 1));
const fact = memoizer({}, (shell,n) => (n < 2) ? 1 : (n * shell(n - 1)));

const counts = n => Array.from(new Array(n), (x,i) => i)

const main = () => {
    console.log(counts(40).map(v=>fib(v)))
    console.log(counts(10).map(v=>fact(v)))
}

main();
