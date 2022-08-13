/*
* Assignment 1-A: Fibonacci numbers
*/ 

// fib - prints fibonacci number Fib(N). N must be greater or equal to 0 
function fib(N) {
    if (N < 0) return -1; // invalid input
    else if (N == 0) return 1;
    else if (N == 1) return 1;
    else return fib(N-1) + fib(N-2);
};

// tests: 
console.log(fib(-1))
console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(5))
//console.log(fib("whoa")) - what happens if you run this? Why? 
console.log(fib(0, 1))
//console.log(fib()) - what happens if you run this? Why? 

console.log("Version printing the Fibonacci numbers")
function printFibonacci(N) {
    for (i=0;i<N;i++) {
        // console.log("Fib " + i.toString() + ": " + fib(i).toString())
        console.log(`Fib ${i}: ${fib(i)}`) // let's use string interpolation
    }
};

// test: 
printFibonacci(3);

console.log("Version returning an array")
const fibonacciInArray = function(N) {
    let rv = [];
    for(i=0;i<N;i++) rv.push(fib(i))
    return rv
}
let y = fibonacciInArray(6);
console.log(y)

console.log("Version returning an object:")
let fibonacciInObject = function(N) {
    let rv = {}
    for(i=0;i<N;i++) rv[i] = fib(i)
    return rv
}
console.log(fibonacciInObject(7))





