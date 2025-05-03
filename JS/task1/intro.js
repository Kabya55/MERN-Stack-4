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
