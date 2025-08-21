// Asynchronous programming in Node.js

//***Example 1

// console.log("Start of program");

// setTimeout(() => {
//   console.log("First timeout completed");
// }, 3000);

// console.log("I am running immediately");

// console.log("End of program");

//***Example 2

// console.log("First");

// setTimeout(() => {
//   console.log("First Time out");

//   setTimeout(() => {
//     console.log("Nested Time out");
//   }, 2000);
// }, 2000);

// setTimeout(() => {
//   console.log("Second Time out");
// }, 2000);

// console.log("Last");

//***Example 3

const fs = require("fs");
console.log("Starting file operation");

fs.writeFileSync("kabya.txt", "Hello Kabya");

setTimeout(() => {
  console.log("I am timer");
}, 1000);

fs.readFile("kabya.txt", "utf8", (err, data) => {
  console.log("File read:", data);
});

console.log("Asynchronous code finished");
