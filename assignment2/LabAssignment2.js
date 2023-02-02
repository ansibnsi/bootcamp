
let numStr = prompt("Please enter a string of random numbers:");

// Convert string of random numbers into array
let numArr = numStr.split(",");

// Sort array to find min and max number
numArr.sort();

let min = numArr[0]; // First element in sorted array is the min
let max = numArr[numArr.length - 1]; // Last element in sorted array is the max

console.log("Minimum number: " + min);
console.log("Maximum number: " + max);