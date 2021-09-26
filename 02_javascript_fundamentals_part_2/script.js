'use strict'; // strict mode has to be first line
// forbids us to do certain things
// create visible errors where it would fail 'silently' without it

let hasDriversLicense = false;
const passTest = true;

// Without strict, there is no error mode when the variable is mistyped
// if ( passTest ) hasDriverLicense = true;
if ( hasDriversLicense ) console.log('I can drive');

// strict mode will error for reserved words
//const interface = 'Audio';
//const private = 534;

// Functions
function logger() {
  console.log('My name is Jonas');
}

// Calling / Running / Invoking function
logger();
logger();
logger();

function fruitProcessor( apples, oranges ) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 7);
console.log(orangeJuice);

// Function declaration vs expressions
// Function declaration
function calcAge1( birthYear ) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function ( birthYear ) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);