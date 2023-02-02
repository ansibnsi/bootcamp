let arr = [3, 5, 1, 4, 2];
arr.sort((a, b) => a - b);
console.log(...arr); // [1, 2, 3, 4, 5]
arr.sort((a, b) => b - a);
console.log(...arr); // [5, 4, 3, 2, 1]
