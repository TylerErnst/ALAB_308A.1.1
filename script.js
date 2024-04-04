// Declare a global counter variable.
let stackCount = 0;
// Create a simple function that increments the variable, and then calls itself recursively.
function stackCounter(){
    stackCount++;
    stackCounter();
}

// Surround the initial function call in a try/catch block.
try {
    //stackCounter();
} catch (error) {
    // Within the catch, log the error and the value of the counter variable.
    console.log(error);
    console.log('Max stack: ', stackCount);
}



// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
const textElement = document.getElementById('text');
// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
// Once complete, use the alert() method to alert the user that the calculation is finished.

let n = 1000000;

function addPrimes(n,element){
    let num = 0;
    while (num < n){
        if (isPrime(num)){
            newListItem = document.createElement("li");
            newListItem.innerHTML = num;
            element.appendChild(newListItem);
        }
        num ++;
    }
    
}

addPrimes(n,textElement)
setTimeout(() => {
    alert("Calculation Done");
},5)








function isPrime (num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}