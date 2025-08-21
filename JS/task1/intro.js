let kabya = "Hi Kabya";
console.log(kabya);

let firstName = "Kabya";
firstName = "Hi Kishor";
console.log(firstName);

const pi = 3.14;
console.log(pi);

//data types

// let name = "Kabya"; // string
let str = "Kabya";
console.log(typeof str);

// let age = 20; // number
let num = 20;
console.log(typeof num);

//let value = undefined; // undefined
let value = undefined;
console.log(typeof value);

//let val = null; // null/object
let val = null;
console.log(typeof val);

// let bool = true; // boolean
let bool = true;
console.log(typeof bool);

// let bool2 = false; // boolean
let bool2 = false;
console.log(typeof bool2);

let obj = {
  name: "Kabya",
  age: 20,
  isStudent: true,
  isTeacher: false,
};
console.log(typeof obj);

// arithmetic operators -> +, -, *, /,**, %

console.log(5 + 5); // addition
console.log(typeof (5 + 5)); // number

console.log(5 + "5"); // concatenation
console.log(typeof (5 + "5")); // string

console.log(15 - 5); // subtraction // number
console.log(typeof (15 - "5")); // number

console.log(5 * 5); // multiplication

console.log(5 / 5); // division

console.log(5 ** 2); // exponentiation

console.log(15 % 4); // modulus

let number = 10;
number++; //number = number +1
console.log(number);

// post increment
let num1 = 10;
let num2 = num1++;
console.log(num2); // 10

// pre increment
let num3 = 10;
let num4 = ++num3;
console.log(num4); // 11

//assignment operators -> =, +=, -=, *=, /=, %=, **=

let a = 10;
a = a + 5; // 15
console.log(a); // 15

// another way to do the same thing
let b = 10;
b += 10; // b = b + 10
console.log(b); // 20

let c = 15;
c *= 2; // c = c * 2
console.log(c); // 20

let d = 10;
d /= 2; // d = d / 2
console.log(d); // 5

let e = 10;
e %= 3; // e = e % 3
console.log(e); // 1

let f = 3;
f **= 2; // f = f ** 2
console.log(f); // 100

//JavaScript Comparison Operators -> ==, ===, !=, !==, >, <, >=, <=, ?
//=== value and number 2 tai check kore
//== value check kore number check kore na

//equal to operator
console.log(5 == 5); // true
console.log("5" == 5); // true
console.log(5 == 6); // false

//equal value and equal type operator
console.log(5 === 5); // true
console.log("5" === 5); // false

//not equal to operator
console.log(5 != 5); // false
console.log(5 != 6); // true
console.log("5" != 5); // false
console.log("5" != "6"); // true

//not equal value or not equal type operator
console.log(5 !== 5); // false
console.log("5" !== 5); // true

//greater than operator
console.log(5 > 10); // false
console.log(10 > 5); // true

//	greater than or equal to operator
console.log(10 >= 10); // true

//less than operator
console.log(5 < 10); // true
console.log(10 < 5); // false

//less than or equal to operator
console.log(10 <= 10); // true
console.log(10 <= 5); // false

//ternary operator
let age1 = 19;
let msg = age1 >= 18 ? "welcome" : "Get out";
console.log(msg); // welcome

let age2 = 17;
let msg2 = age2 >= 18 ? "welcome" : "Get out";
console.log(msg2); // Get out

//logical operators -> &&, ||, !
//and operator
console.log(true && true); // true
console.log(true && false); // false

//or operator
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

//not operator
console.log(!true); // false
console.log(!false); // true

//falsy values -> 0, -0, 0n, "", undefined, null, NaN, false

// ja ja value boolean a covet korla false hoye ta holo falsy value
console.log(Boolean(0)); // false

// ja ja value boolean a covet korla true hoye ta holo truthy value
console.log(Boolean(1)); // true

// --------------------------------------------------------------
// Array methods
// Array holo mutable data structure, ja ekadhik value store korte pare
// Array er index 0 theke shuru hoye 1,2,3,4,5,6... eirokom sequence a thake

let array = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
let newArray = array;
console.log(newArray); // ['Kabya', 'Kishor', 'Halder', 'Khoken', 'Kanti', 'Kabita']

//Array tay new element add korbo
let array1 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
array1[6] = "Sikder"; // array1[6] = 'Kabita2';
console.log(array1); // ['Kabya', 'Kishor', 'Halder', 'Khoken', 'Kanti', 'Kabita', 'Sikder']

//Dynimic weay to add element last in array

let array2 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
array2[array2.length] = "Sikder"; // array2[array2.length] = 'Sikder';
console.log(array2); // ['Kabya', 'Kishor', 'Halder', 'Khoken', 'Kanti', 'Kabita', 'Sikder']

//Array tay element gulo akae sequence a thake
//Array er index 0 theke shuru hoye 1,2,3,4,5,6... eirokom sequence a thake

let array3 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
array3[15] = "Sikder"; // array3[15] = 'Kabita2';
console.log(array3); // ['Kabya', 'Kishor', 'Halder', 'Khoken', 'Kanti', 'Kabita', <9 empty items>, 'Sikder']
//Array er length property diye array er length ber korta hoy
console.log(array3.length); // 16

//property -> info about the object

let anotherArray = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
console.log(anotherArray.length); // 6

// method() -> action of the object
// array are last a new element add kora hoy push() method diye
let anotherArray2 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
anotherArray2.push("Sikder"); // yetAnotherArray.push('Kabita2');
console.log(anotherArray2); // ['Kabya', 'Kishor', 'Halder', 'Khoken', 'Kanti', 'Kabita', 'Sikder']

// array are last a kono element bad/remove/delete kora hoy pop() method diye
let anotherArray3 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
anotherArray3.pop(); // yetAnotherArray3.pop();
console.log(anotherArray3); // ['Kabya', 'Kishor', 'Halder', 'Khoken', 'Kanti']

// delete korer another owy
let anotherArray4 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
delete anotherArray4[anotherArray4.length - 1];
console.log(anotherArray4); // ['Kabya', 'Kishor', 'Halder', 'Khoken', 'Kanti', <1 empty item>]

// array er first a new element add kora hoy unshift() method diye
let anotherArray5 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
anotherArray5.unshift("Sikder");
console.log(anotherArray5); // ['Sikder', 'Kabya', 'Kishor', 'Halder', 'Khoken', 'Kanti', 'Kabita']

// array er first a kono element bad/remove/delete kora hoy shift() method diye
let anotherArray6 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
anotherArray6.shift();
console.log(anotherArray6); // ['Kishor', 'Halder', 'Khoken', 'Kanti', 'Kabita']

//The JavaScript method toString() converts an array to a string of (comma separated) array values.
let anotherArray7 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
let anotherArray8 = anotherArray7.toString(); // anotherArray7.toString();
console.log(anotherArray8); // Kabya,Kishor,Halder,Khoken,Kanti,Kabita

// Get the third element of fruits using at():
let anotherArray9 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
let anotherArray10 = anotherArray9.at(2); // anotherArray9.at(2);
console.log(anotherArray10); // Halder

//Get the third element of fruits using []:
let anotherArray11 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
let anotherArray12 = anotherArray11[2]; // anotherArray11[2];
console.log(anotherArray12); // Halder

//The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator:

let anotherArray13 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
let anotherArray14 = anotherArray13.join("-"); // anotherArray13.join('-');
console.log(anotherArray14); // Kabya-Kishor-Halder-Khoken-Kanti-Kabita

//The concat() method creates a new array by merging (concatenating) existing arrays:
//Example (Merging Two Arrays)

let anotherArray15 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
let anotherArray16 = ["Sikder", "Tandra"];
let anotherArray17 = anotherArray15.concat(anotherArray16); // anotherArray15.concat(anotherArray16);
console.log(anotherArray17); // ['Kabya', 'Kishor', 'Halder', 'Khoken', 'Kanti', 'Kabita', 'Sikder', 'Tandra']

// The JavaScript spread operator (...) expands an iterable (like an array) into more elements.
// This allows us to quickly copy all or parts of an existing array into another array
let names1 = [...anotherArray15, ...anotherArray16]; // [...anotherArray15, ...anotherArray16];
console.log(names1); // ['Kabya', 'Kishor', 'Halder', 'Khoken', 'Kanti', 'Kabita', 'Sikder', 'Tandra']

//The copyWithin() method copies array elements to another position in an array:
//This method overwrites the existing values.
let anotherArray18 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
anotherArray18.copyWithin(1, 3, 5);
console.log(anotherArray18); // ['Kabya', 'Khoken', 'Kanti', 'Khoken', 'Kanti', 'Kabita']

//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
//The flat() method does not change the original array.
let anotherArray19 = [
  [1, 2],
  [3, 4],
  [5, 6],
]; // [[1,2],[3,4],[5,6]];
let anotherArray20 = anotherArray19.flat(); // anotherArray19.flat();
console.log(anotherArray20); // [1, 2, 3, 4, 5, 6]

// The splice() method adds new elements to an array:
let anotherArray21 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
anotherArray21.splice(2, 0, "Sikder", "Tandra"); // anotherArray21.splice(2, 0, 'Sikder', 'Tandra');
console.log(anotherArray21); // ['Kabya', 'Kishor', 'Sikder', 'Tandra', 'Halder', 'Khoken', 'Kanti', 'Kabita']

// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

let months = ["Jan", "Feb", "Mar", "Apr"];
let spliced = months.toSpliced(2, 3, "may", "jun"); // months.toSpliced(2, 3,'may', 'jun');
console.log(spliced); // ["Jan", "Feb", "may", "jun"]

// slice() is a JavaScript Array method that creates a new array by cutting a portion of an array. The old array is not modified in any way.

let anotherArray22 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
let anotherArray23 = anotherArray22.slice(2, 5); // anotherArray22.slice(2, 5);
console.log(anotherArray23); // ['Halder', 'Khoken', 'Kanti']

// //immutable a induvulal element change kora jay na

// let star = 'Hello Kabya';
// star[0] = 'h'; // star[0] = 'h';
// console.log(star); // Hello Kabya

//loop
// Five types of loop in JS
//1. for loop
//2. for in loop
//3. for of loop
//4.while loop
//5.do while loop

//* for loop
// for loop is used to iterate over a block of code a number of times.
// for loop er modhe 3 ta part thake, counter variable, condition, increment/decrement
// for loop er modhe counter variable a variable declare kora hoy, condition a check kora hoy, increment/decrement a variable er value barano hoy

let array24 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
for (let i = 0; i < array24.length; i++) {
  console.log(array24[i]); // Kabya, Kishor, Halder, Khoken, Kanti, Kabita
}

console.log("------------------");

for (let i = 0; i <= 5; i++) {
  console.log(array24[i]); // Kabya, Kishor, Halder, Khoken, Kanti, Kabita
}

// manully kono kisu array are modha string are vitor add korer example

let array25 = ["Kabya", "Kishor", "Halder", "Khoken", "Kanti", "Kabita"];
let gmArray = [];

for (let i = 0; i < array25.length; i++) {
  gmArray.push("GM " + array25[i]);
}

console.log(gmArray);

//* while loop
// while loop is used to execute a block of code as long as the condition is true.
// while loop er modhe condition thake, jodi condition true hoy tahole block of code execute hobe, nahole hobe na

let i = 1;
while (i <= 10) {
  console.log(i); // 1,2,3,4,5,6,7,8,9,10
  i++;
}

console.log("------------------");

for (let i = 0; i <= 10; i += 2) {
  console.log(i); // 0,2,4,6,8,10
}

console.log("------------------");

for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  if (i == 6) continue;
  console.log(i);
}

console.log("------------------");

for (let i = 1; i <= 10; i++) {
  if (i == 4 || i == 8) continue;

  console.log(i);
}

console.log("------------------");

let i1 = 10;
while (i1++) {
  console.log(i1);

  if (i1 == 20) break;
}

console.log("------------------");

let j = 10;
while (j >= 1) {
  console.log(j); // 10,9,8,7,6,5,4,3,2,1
  j--;
}

console.log("------------------");

//foer of loop
// for of loop is used to iterate over the elements of an array or a string.

let array26 = ["Kabya", "Kishor", "Halder"];

for (Element of array26) {
  console.log(Element);
}

console.log("------------------");

// nested loop
// loop are vitor loop thakle taka nested loop bole

for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    console.log("i = " + i + " j = " + j);
  }
}

console.log("------------------");

// two dimensional array
// two dimensional array are er modhe array thake, ja ekta table er moto hoy

let arr = [
  ["Kabya", "Kishor", "Halder"],
  ["Khoken", "Kanti", "Halder"],
  ["Kabita", "Sikder"],
  ["Tandra", "Baral"],
];

for (row = 0; row < arr.length; row++) {
  for (let col = 0; col < arr[row].length; col++) {
    console.log(arr[row][col]);
  }
}

console.log("------------------");

//foer of loop kivaba two dimensional array er modhe use kora hoy

let arr1 = [
  ["Kabya", "Kishor", "Halder"],
  ["Khoken", "Kanti", "Halder"],
  ["Kabita", "Sikder"],
  ["Tandra", "Baral"],
];

for (innerArr1 of arr1) {
  for (singleVal of innerArr1) {
    console.log(singleVal);
  }
}

console.log("------------------");

// if else condition

let age3 = 17;
if (age3 > 18) {
  console.log("welcome"); // welcome
} else {
  console.log("get out"); // get out
}

console.log("------------------");

// for loop vs while loop
// for loop is used when we know the number of iterations
// while loop is used when we don't know the number of iterations

// JavaScript Conditionals and introduction to Functions

//fizz buzz problem

// ja ja number 1 theke 100 porjonto print korbe, kintu jodi number ta 3 er multiple hoy tahole fizz print korbe, jodi number ta 5 er multiple hoy tahole buzz print korbe, jodi number ta 3 and 5 er multiple hoy tahole fizzbuzz print korbe

// Loop 1-100
// if num % 3 == 0 && num % 5 == 0 -> print fizzbuzz
// if num % 3 == 0 -> print fizz
// if num % 5 == 0 -> print buzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

console.log("------------------");

// Date object
// Date object is used to work with dates and times in JavaScript.

// Amra 2 ta vaba korta pari
// 1. let date = new Date().getDay(); ex:  ai khana console.log(date); hobe
// 2. let date = new Date(); ex: ai khana console.log(date.getDay()); hobase,

let date = new Date().getDay(); // current date and time
console.log(date); // current date and time

// if else amra khana use korta pari => jakhon amader multiple condition cheack korte chai tahole if else use korta pari
if (date == 0) {
  console.log("Sunday");
} else if (date == 1) {
  console.log("Monday");
} else if (date == 2) {
  console.log("Tuesday");
} else if (date == 3) {
  console.log("Wednesday");
} else if (date == 4) {
  console.log("Thursday");
} else if (date == 5) {
  console.log("Friday");
} else if (date == 6) {
  console.log("Saturday");
}

console.log("------------------");

// another way is to use switch case
// Switch amra kokhon use korta pari => ak ta jinish ere multiple value check korte chai tahole switch case use korta pari

let date1 = new Date();

switch (date1.getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}

// switch are modha "default" use kora hoy, jodi kono case match na hoy tahole default case execute hobe
// Ex: default: // console.log("Default"); // break;

console.log("------------------");

// Multiple condition

let age = 16;
let location = "Dhaka";

if (age >= 18 && location == "Dhaka") {
  console.log("Welcome"); // welcome
} else if (age < 18 && location !== "Dhaka") {
  console.log("Youre age and location is not matching");
} else if (age < 18) {
  console.log("Youre age is not matching");
} else if (location !== "Dhaka") {
  console.log("Youre location is not matching");
}

console.log("------------------");

// User ki input korsa jodi ta amra dhakata chai

if (age >= 18 && location == "Dhaka") {
  console.log("Welcome"); // welcome
} else if (age < 18 && location !== "Dhaka") {
  console.log(
    "Youre age and location is not matching. Youre current age is" +
      age +
      " and location is " +
      location
  );
} else if (age < 18) {
  console.log("Youre age is not matching. Youre current age is " + age);
} else if (location !== "Dhaka") {
  console.log(
    "Youre location is not matching. Youre current location is " + location
  );
}

console.log("------------------");

// User ki input korsa jodi ta amra dhakata chai tar smart way
// `` => aitar nam Backtick/template literal ai ta use kora hoy, jate amra string er modha variable use korte pari

if (age >= 18 && location == "Dhaka") {
  console.log("Welcome"); // welcome
} else if (age < 18 && location !== "Dhaka") {
  console.log(
    `Youre age and location is not matching. Youre current age is ${age} and location is ${location}`
  );
} else if (age < 18) {
  console.log(`Youre age is not matching. Youre current age is ${age}`);
} else if (location !== "Dhaka") {
  console.log(
    `Youre location is not matching. Youre current location is ${location}`
  );
}

console.log("------------------");

// Function
// Function is a block of code that performs a specific task. It is executed when it is called.

// treditional function
// function er modha jodi kono name thake tahole take traditional function bole
function sayHello() {
  console.log("Hello Kabya");
}

sayHello();

console.log("------------------");

// amra jodi kono kisu add korte chai tahole function er modha parameter pass korte hoy

function sayHello1(name) {
  console.log("Hello " + name);
}
sayHello1("Kishor");

console.log("------------------");

// default parameter

function sayHello2(name) {
  if (name === undefined) {
    name = "Kishor";
  }
  console.log("Hello " + name);
}
sayHello2();
sayHello2("Tandra");

console.log("------------------");

//easer way to do the same thing

function sayHello3(name = "Kishor") {
  console.log("Hello " + name);
}
sayHello3();
sayHello3("Kabya");

console.log("------------------");

// function are madhoma  amra reusable akadhik number are jog kora jabe
function add(num1, num2) {
  console.log(num1 + num2);
}
add(10, 20); // 30
add(20, 30); // 50

console.log("------------------");

// function expression
// function ka jodi kono variable er modha rakha hoy (assign kora hoy) tahole take function expression bole

// anonymous function
// function er modha jodi kono name na thake tahole take anonymous function bole

let anonymous = function (num1, num2) {
  console.log(num1 + num2);
};

anonymous(10, 20);

console.log("------------------");

// Arrow function
// function er modha jodi arrow function use kora hoy tahole take arrow function bole

let arrowFunction = (num1, num2) => num1 + num2;
console.log(arrowFunction(10, 20)); // 30

console.log("------------------");

// fanction return

function adder(num1, num2) {
  return num1 + num2;
}
let result1 = adder(10, 20);
let result2 = adder(20, 30);
console.log(result1); // 30
console.log(result2); // 50

console.log("result1", result1); // 30
console.log("result2", result2); // 50

console.log("------------------");

// Assignment a function to a variable  example of function return
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(10, 20) + 5); // 35

console.log("------------------");

// Function are modha argument akara passed kora hoy, jodi amra function are modha argument na dei tahole undefined hoye jabe

function minus(num1, num2) {
  console.log(num1 - num2);
}
minus(adder(10, 5), 5);

function minus1(num1, num2) {
  return num1 - num2;
}
console.log(minus1(adder(5, 5), 5));

console.log("------------------");

// Function are vitor function return kora hoy, jate amra function are modha function use korte pari

function returnFromAFunc(num1, num2) {
  return adder(num1, num2);
}

console.log(returnFromAFunc(15, 5)); // 20

console.log("------------------");

// Ak ta fanction dia are ak ta function are vitor function are reference ki vaba pass korbo tar ex:

function hello() {
  console.log("Hello Kabya");
}

function sayHello10(k) {
  k(); // function are modha function are reference pass kora hoy jamon sayHello10(k) er modha k() pass kora hoy
}

function againSayHello10(k) {
  k();
}
againSayHello10(hello);

console.log("------------------");

// Function basically 4 dhoren are hoy
// 1. Has parameter and has return value
// 2. Has parameter and has no return value
// 3. Has no parameter and has return value
// 4. Has no parameter and has no return value

console.log("------------------");

// FizzBuzz function problem

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

console.log("------------------");

// Interest calculation function
// Interest calculation function er modha 3 ta parameter pass kora hoy, ja holo principal, rate and time
// function calculateSimpleInterest(principal, rate, time)
//   return (principal * rate * time) / 100;

function calculateSimpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

let cal = calculateSimpleInterest(100, 10, 2); // 20
console.log("Total Interest: " + cal + " Taka"); // 20

// console.log(calculateSimpleInterest(100, 10, 2)); // 20

console.log("------------------");

// Stike Rate calculation function
function stikeRate(run, ball) {
  return (run / ball) * 100;
}
let stike = stikeRate(50, 30);
console.log("Stike Rate: " + stike); // 166.66666666666666
console.log("Stike Rate: " + stike.toFixed(2)); // 166.67

console.log("------------------");

// Objects retirel
// Objects are used to store data values in key-value pairs.
// Objects are mutable data structure, ja ekadhik value store korte pare
// Object are vitor ja function thakay take method bole

let person = {
  name: "Kabya",
  age: 20,
  city: "Dhaka",
  getFullName: function () {
    console.log("Kabya Kishor Halder");
  },
};
console.log(person); // { name: 'Kabya', age: 20, city: 'Dhaka' }
console.log(person.name); // Kabya
console.log(person["name"]); // Kabya
person.getFullName();
person["getFullName"](); // Kabya Kishor Halder

console.log("------------------");

// Jodi amra kono key-value add korta chai ta ja vaba korbo
person.height = 5.9; // person.height = 5.9;
person.hobby = ["progriming", "reading", "writing"]; // person.hobby = ['programming', 'reading', 'writing'];
console.log(person); // { name: 'Kabya', age: 20, city: 'Dhaka', height: 5.9, hobby: [ 'programming', 'reading', 'writing' ] }

console.log("------------------");

// Amra jodi kono key-value delete korta chai ta ja vaba korbo
delete person.height; // delete person.height;
console.log(person); // { name: 'Kabya', age: 20, city: 'Dhaka' }

console.log("------------------");

//object er modha amra ki vaba loop chalabo tar example
// for in loop
// Amra key dhaker somay (); ai ta babor korbo / value dhaker somay ([]) ai vaba babor korbo

for (let key in person) {
  console.log(key); // name, age, city, height, hobby
  // console.log(person[key]);
}

console.log("------------------");

for (let val in person) {
  console.log(person[val]); // Kabya, 20, Dhaka, 5.9, [ 'programming', 'reading', 'writing'
}

console.log("------------------");

// property && method ak sata ki vaba envoke kora hoy
// property are modha jodi kono value thake tahole take property bole, jodi kono function thake tahole take method bole

for (let el in person) {
  if (typeof person[el] == "function") {
    person[el]();
  } else {
    console.log(person[el]);
  }
}

console.log("------------------");

// calculate

let calculate = {
  plus(num1, num2) {
    return num1 + num2;
  },
  minus(num1, num2) {
    return num1 - num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
  divide(num1, num2) {
    return num1 / num2;
  },
};

console.log(calculate.plus(10, 20)); // 30
console.log(calculate.minus(20, 15)); // 5
console.log(calculate.multiply(15, 2)); // 30
console.log(calculate.divide(20, 5)); // 4

console.log("------------------");

//Dynimic calculation
// are madhoma 2 are odhik sonka +,-,*,/ korta parbo

function calculater5(...nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}
console.log(calculater5(10, 20)); // 30
console.log(calculater5(10, 20, 30)); // 60

let nums = [10, 20, 30, 40, 50];
console.log(calculater5(...nums)); // 150

console.log("------------------");

// spread operator
// spread operator er madhoma amra akta array er value add korta pari

let arr2 = [1, 2, 3, 4, 5];
let arr3 = [6, 7, 8, 9, 10];
let arr4 = [...arr2, ...arr3]; // [...arr, ...arr1] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(...arr); // 1 2 3 4 5
console.log(...arr4); // 1 2 3 4 5 6 7 8 9 10

console.log("------------------");

// this keyword
// this 2 jaygay use hoy
// 1. function er modha this keyword envok hola Global object k refer kore, jodi function er modha this keyword use hoy tahole take Global object bole
// 2. method/object er modha this keyword envok hola tar parent object k refer kore, jodi method er modha this keyword use hoy tahole take parent object bole

// this keyword is used to refer to the current object in JavaScript. It is used to access the properties and methods of the current object.
// this keyword is used in many different contexts, such as functions, methods, constructors, and event handlers.

// function -> this keyword refer to the global object

let person1 = {
  name: "Kabya Kishor Halder",
  age: 20,
  city: "Pirojpur",
  interest: ["Html", "Css", "JavaScript"],
  kabita() {
    console.log("Hello", this.name); // Hello Kabya Kishor Halder
  },
  nameInterest() {
    this.interest.forEach(function (interest) {
      // Anonymous function
      console.log(this.name + " Loves " + interest);
    }, this); // }, this/person1); dita hoba
  },
};
person1.nameInterest(); // Hello Kabya Kishor Halder

console.log("------------------");
//Arrow function babor kora upor kaj ta ki vaba korta pari

// Arrow function -> this keyword refer to the global object
// Arrow function er modha this keyword use korle take global object k refer kore, jodi arrow function er modha this keyword use hoy tahole take global object bole

let person2 = {
  name: "Kabya Kishor Halder",
  age: 20,
  city: "Pirojpur",
  interest: ["Html", "Css", "JavaScript"],
  kabita() {
    console.log("Hello", this.name); // Hello Kabya Kishor Halder
  },
  nameInterest() {
    this.interest.forEach((interest) => {
      // Arrow function
      console.log(this.name + " Loves " + interest);
    });
  },
};
person1.nameInterest(); // Hello Kabya Kishor Halder

console.log("------------------");

// method/object -> this keyword refer to the parent object

let person4 = {
  name: "Kabya Kishor Halder",
  age: 20,
  city: "Pirojpur",
  interest: ["Html", "Css", "JavaScript"],
  kabita() {
    console.log("Hello", this.name); // Hello Kabya Kishor Halder
  },
};
person4.kabita(); // Hello Kabya Kishor Halder

console.log("------------------");

// Factory function
// Factory function holo akta function ja object create kore, ja amra jodi ekta function er modha object create kori tahole take factory function bole

function createPerson(name, age, interest) {
  return {
    name: name,
    age: age,
    interest: interest,
    kabita: function () {
      console.log("Hello"); // Hello Kabya Kishor Halder
    },
  };
}

let person5 = createPerson("Kabya", 28, ["Html", "Css", "JavaScript"]);
let person6 = createPerson("Kishor", 25, ["Html", "Css", "JavaScript"]);
console.log(person5);
console.log(person6);

console.log("------------------");
// More then easy way

function createPerson(name, age, interest) {
  return {
    name, //name: name, jodi same hoy tahole sudu name, liklai hobe
    age,
    interest,
    kabita() {
      // kabita: function () amra ai khana short kora sudu kabita() likhe pari
      console.log("Hello");
    },
  };
}

let person7 = createPerson("Kabya", 28, ["Html", "Css", "JavaScript"]);
let person8 = createPerson("Kishor", 25, ["Html", "Css", "JavaScript"]);
console.log(person7);
console.log(person8);

console.log("------------------");

// Constructor function
// Constructor function holo akta function ja object create kore, ja amra jodi ekta function er modha object create kori tahole take constructor function bole
// Ai khana amra PascalCase use korbo example -> FirstName

function CreatePerson(name, age, interest) {
  this.name = name;
  this.age = age;
  this.interest = interest;
}
let person9 = new CreatePerson("Kabya Kishor Halder", 28, [
  "Html",
  "Css",
  "JavaScript",
  "React",
]); // new <- ak ta js keyword jar dara bujano hoy tumi ak ta object create korta chao
console.log(person9); // { name: 'Kabya Kishor Halder', age: 28, interest: [ 'Html', 'Css', 'JavaScript', 'React' ] }

console.log("------------------");
// Constructor function a -> class ki vaba babor kora hoy
// class er modha constructor function use kora hoy, jate amra class er modha object create korte pari

class CreatePerson1 {
  constructor(name, age, interest) {
    // constructor ak ta inbuilt function
    // constructor are vitora must be -> this keyword use kora hoy
    this.name = name;
    this.age = age;
    this.interest = interest;
  }
  kabita() {
    console.log("Hello", this.name); // Hello Kabya Kishor Halder
  }
}
let person10 = new CreatePerson1("Kabya Kishor Halder", 28, [
  "Html",
  "Css",
  "JavaScript",
  "React",
  "Node Js",
]); // new <- ak ta js keyword jar dara bujano hoy tumi ak ta object create korta chao
console.log(person10); // { name: 'Kabya Kishor Halder', age: 28, interest: [ 'Html', 'Css', 'JavaScript', 'React' ] }
person10.kabita(); // Hello Kabya Kishor Halder
console.log(person10.kabita()); // Hello Kabya Kishor Halder

console.log("------------------");

// Iffy -> Immediately Invoked Function Expression

(function sayHello() {
  console.log("Hello Kabya");
})(); // Hello Kabya

(sayHello2 = () => {
  console.log("Hello Kabita");
})();

(() => {
  console.log("Hello Khoken");
})();

((name) => {
  console.log("Hello", name);
})("Tandra");

console.log("------------------");
//Live Class 24: JavaScript Array Methods - Map, Filter, Sort, Every, Some, Reduce
// Array Map
// "Array map" (JavaScript-er .map() method) tokhon babohar kora hoy jokhon tumi ekta array-r prottekta element-er upor same dhoroner operation apply kore ekta notun array pete chao, original array ke na bodle.

let number1 = [2, 3, 4, 5];
let newArray1 = number1.map((element) => {
  return element * 2;
});
console.log(newArray1); // [4, 6, 8, 10]

//  Aro short vaba
let newArray2 = number1.map((element) => element * 2);
console.log(newArray2); // [4, 6, 8, 10]

console.log("------------------");
//problem solving

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// Get an array of all names
let allNames = characters.map((el) => {
  return el.name;
});
console.log(allNames); // ['Luke Skywalker', 'Darth Vader', 'Leia Organa', 'Anakin Skywalker']

// Short way
let allNames1 = characters.map((el) => el.name);
console.log(allNames1);

console.log("------------------");

// Get an array of all heights
let allHeights = characters.map((el) => el.height);
console.log(allHeights); // ['172', '202', '150', '188']

console.log("------------------");

// Get an array of objects with just name and height properties

let nameAndHeight = characters.map((el) => {
  return {
    name: el.name,
    height: el.height,
  };
});
console.log(nameAndHeight); // [ { name: '172', height: '172' }, { name: '202', height: '202' }, { name: '150', height: '150' }, { name: '188', height: '188' } ]

console.log("------------------");

// Get an array of all first names

let firstNames = characters.map((el) => {
  return el.name.split(" ")[0];
});
console.log(firstNames); // ['Luke', 'Darth', 'Leia', 'Anakin']

console.log("------------------");

// Array Filter
// Array .filter() JavaScript-e tokhon babohar kora hoy jokhon tumi ekta array theke kichu specific condition fulfill kora element-gulo ke ber kore notun ekta array pete chau — mane, original array theke kichu element "filter" kore ber kora.

let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = number2.filter((el) => {
  return el % 2 == 0; // even number
});
console.log(evenNumbers); // [2, 4, 6, 8, 10]

let oddNumbers = number2.filter((el) => {
  return el % 2 !== 0;
});
console.log(oddNumbers); // [1, 3, 5, 7, 9]

console.log("------------------");
// Problem solving

const characters1 = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// Get characters with mass greater than 100
let massGreaterthan100 = characters1.filter((el) => {
  return el.mass > 100;
});
console.log(massGreaterthan100);
console.log("------------------");
//Short way

let GreaterThan100 = characters1.filter((el) => el.mass > 100);
console.log(GreaterThan100);
// Get characters with height less than 200

let heightLessThen200 = characters1.filter((el) => el.height < 200);
console.log(heightLessThen200);
console.log("------------------");
// Get all male characters

let allMaleCharacters = characters1.filter((el) => el.gender == "male");
console.log(allMaleCharacters); // [ { name: 'Luke Skywalker', height: '172', mass: '77', eye_color: 'blue',gender: 'male' }, {name: 'Leia Organa', height: '150', mass: '49', eye_color: 'brown', gender: 'female'}, { name: 'Anakin Skywalker', height: '188', mass: '84', eye_color: 'blue', gender: 'male' } ]

console.log("------------------");
// Get all female characters

let allFemaleCharacters = characters1.filter((el) => el.gender == "female");
console.log(allFemaleCharacters); // [{ name: 'Leia Organa', height: '150', mass: '49', eye_color: 'brown', gender: 'female'}]

console.log("------------------");

// Array Every
// Array .every() tokhon babohar kora hoy jokhon tumi check korte chau je ekta array-r sob item ki ekoi condition fulfill kore — jodi sob item condition pass kore, tahole .every() return kore true, na hole false. -> Bolian value return kore

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let every = arr5.every((el) => {
  return el % 2 == 0;
});
console.log(every); // false

let arr6 = [2, 4, 6, 8, 10];
let every1 = arr6.every((el) => {
  return el % 2 == 0;
});
console.log(every1); // true

console.log("------------------");
//problem solving
const characters2 = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// Does every character have blue eyes?
let everyBlueEyes = characters2.every((el) => {
  return el.eye_color == "blue";
});
console.log(everyBlueEyes); // false

console.log("------------------");
// Does every character have mass more than 40?
let massMoreThen40 = characters2.every((el) => {
  return el.mass > 40;
});
console.log(massMoreThen40); // true

console.log("------------------");
// Is every character shorter than 200?

let characterShorterThan200 = characters2.every((el) => {
  return el.height < 200;
});
console.log(characterShorterThan200); // true

console.log("------------------");
// Is every character male?
let everyMale = characters2.every((el) => {
  return el.gender == "male";
});
console.log(everyMale); // false

console.log("------------------");
// Array Some
//Array .some() tokhon babohar kora hoy jokhon tumi check korte chau je array-r moddhe kompakhe ekta item ki specific kono condition fulfill kore. Jodi ekta item-o condition fulfill kore, .some() return kore true; na hole false.

let arr7 = [1, 3, 5, 6, 7, 9];
let some = arr7.some((el) => {
  return el % 2 == 0;
});
console.log(some); // true

let arr8 = [1, 3, 5, 7, 9];
let some1 = arr8.some((el) => {
  return el % 2 == 0;
});
console.log(some1); // false

console.log("------------------");
//problem solving

const characters3 = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// Is there at least one male character?
let oneMaleCharacter = characters3.some((el) => el.gender == "male");
console.log(oneMaleCharacter); // true

console.log("------------------");
// Is there at least one character with blue eyes?
let oneBlueEyes = characters3.some((el) => el.eye_color == "blue");
console.log(oneBlueEyes); // true

console.log("------------------");
// Is there at least one character taller than 200?
let oneTallerThan200 = characters3.some((el) => el.height > 200);
console.log(oneTallerThan200); // true

console.log("------------------");
// Is there at least one character that has mass less than 50?
let oneMassLessThan50 = characters3.some((el) => el.mass < 50);
console.log(oneMassLessThan50); // true

console.log("------------------");

// Array Sort
// Array .sort() tokhon babohar kora hoy jokhon tumi ekta array-r moddher item-gulo ke specific order-e sajate chau, ja hote pare ascending (choto theke boro) ba descending (boro theke choto) — string, number, ba object-er kono property er upor vitti kore.

let number3 = [5, 2, 9, 1, 5, 6];
let sortedNumber = number3.sort((a, b) => a - b);
console.log(sortedNumber); // [1, 2, 5, 5, 6, 9]

let sortedNumber1 = number3.sort((a, b) => b - a);
console.log(sortedNumber1);

console.log("------------------");
//problem solving
const characters4 = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// Sort by name
let sortByName = characters4.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
console.log(sortByName);

console.log("------------------");
// Z to A
let sortByName1 = characters4.sort((a, b) => {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
});
console.log(sortByName1);

console.log("------------------");
// Sort by mass

let sortByMass = characters4.sort((a, b) => a.mass - b.mass);
console.log(sortByMass);

console.log("------------------");

let sortByMass1 = characters4.sort((a, b) => b.mass - a.mass);
console.log(sortByMass1);

console.log("------------------");
// Sort by height
let shortByHeight = characters4.sort((a, b) => a.height - b.height);
console.log(shortByHeight);

console.log("------------------");
// Sort by gender
// A to Z
let sortByGender = characters4.sort((a, b) => {
  if (a.gender < b.gender) {
    return -1;
  }
  if (a.gender > b.gender) {
    return 1;
  }
  return 0;
});
console.log(sortByGender);

console.log("------------------");
// Z to A
let sortByGender1 = characters4.sort((a, b) => {
  if (a.gender > b.gender) {
    return -1;
  }
  if (a.gender < b.gender) {
    return 1;
  }
  return 0;
});
console.log(sortByGender1);

console.log("------------------");
//Live Class 25: JavaScript Reduce Method, Execution Context and What to do next

//Array Reduce
// Array .reduce() tokhon babohar kora hoy jokhon tumi ekta array er upor operation kore ekta single value ber korte chau — seta number, string, object, array kichuoi hote pare.
// .reduce() are vitor paramiter hisaba accumulator, element, index, array thaka
// accumulator -> amra sob kisu plus kora jar vitor rakhi taka accumulator bole
// sob kisu plus korer process k accumulat bole

let number4 = [1, 2, 3, 4, 5];
let sum = number4.reduce((accumulator, element) => {
  return accumulator + element; // 1+2+3+4+5 = 15
}, 0);
console.log(sum); // 15

let sum1 = number4.reduce((acc, el) => acc + el, 0);
console.log(sum1); // 15

console.log("------------------");
//problem solving
const characters5 = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// Get the total mass of all characters

let totalMass = characters5.reduce((acc, el) => {
  return acc + Number(el.mass);
}, 0);
console.log(totalMass);

console.log("------------------");
// short weay
let totalMass1 = characters5.reduce((acc, el) => acc + Number(el.mass), 0);
console.log(totalMass1);

console.log("------------------");
// Get the total height of all characters
let totalHeight = characters5.reduce((acc, el) => acc + Number(el.height), 0);
console.log(totalHeight);

console.log("------------------");
// Get the total number of characters in all the character names
let totalCharacter = characters5.reduce((acc, el) => acc + el.name.length, 0);
console.log(totalCharacter);

console.log("------------------");
// Get the total number of characters by eye color (hint. a map of eye color to count)
let totalEyeColor = characters5.reduce((acc, el) => {
  if (acc[el.eye_color]) {
    acc[el.eye_color]++;
  } else {
    acc[el.eye_color] = 1;
  }
  return acc;
}, {});
console.log(totalEyeColor); // { blue: 2, yellow: 1, brown: 1 }

console.log("------------------");
// Execution Context
// Execution context holo akta environment jar modha amra function call kori, jate amra function er modha variable, object, array, function use korte pari. Execution context er modha 3 ta part thake
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context
// Execution context er modha 2 ta part thake
// 1. Lexical Environment
// 2. Dynamic Environment
// Lexical Environment er modha 2 ta part thake
// 1. Variable Environment
// 2. Function Environment
