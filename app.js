console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [10,15];
let sum = (25);
let plusNumber = (10);
let plus15 = (15);
console.log(plusNumber+plus15);

//cruz's version
function plus(num){
    return function (plusNumber){
            return plusNumber + num;
    };
}

var plus15 = plus(15);

console.log(plus15(10));
