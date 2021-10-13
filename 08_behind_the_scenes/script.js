'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Changing existing variable
      output = 'NEW OUTPUT';
      // Creating new variable
      // const output = 'NEWER OUTPUT';
    }
    // Does not work
    // console.log(str);
    console.log(millennial); // Works because we used var declaration
    // This works when strict mode is not enabled
    // add(2, 3);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// Will not work as its out of scope
// console.log(age);
// printAge();

// Hoisting example

// Variables
console.log(me);
// This is the temporal dead zone
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// Temporal dead zone
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// Changing to var will be hoisted and set to undefined
const addExp = function (a, b) {
  return a + b;
};
// Changing to var will be hoisted and set to undefined
const addArrow = (a, b) => a + b;

// Example of why hoisting can lead to issues

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// Example for let const var
var x = 1;
let y = 2;
const z = 3;

// var is the only one that puts it into the window object
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
