// Assign variable and use it in an if statement
let js = 'amazing';
if(js === 'amazing') console.log('JavaScript is amazing!');

// console.log examples
console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23);

// Naming Convention is camelCase
let firstName = 'Matt';
console.log(firstName);
console.log(firstName);
console.log(firstName);

/*
   Can only use numbers, letters, underscores, and $
   Invalid Examples:
     let 3years = 3;
     let janas&matilda = 'JM'
*/

/*
  Other Rules:
  - Do not start variable with uppercase letter.
  - Constant variables are capitalized
  - Make variable names descriptive:
      myFirstJob vs job1
      myCurrentJob vs job2
*/

// Assignment 1: Values and Variables
let country = 'United States';
let continent = 'North America';
let population = 328.2;

console.log(country);
console.log(continent);
console.log(population);
// End Assignment 1: Values and Variables

// Data Type Section
// Dynamic typing is possible with variables
let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);
javaScriptIsFun = 'Yes!';
console.log(typeof javaScriptIsFun);

// Undefined Variable
let year;
console.log(year);
console.log(typeof year);

year = 2021;
console.log(year);
console.log(typeof year);

// null returns as an object and is considered a bug but is kept for legacy reasons
console.log(typeof null);

// Assignment 2: Values and Variables
let isIsland = false;
let language1;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language1);
// End Assignment 2: Values and Variables

// let, const and var
// let is good for mutable and unassigned 
let height;
let age = 30;
age = 31;

// const is immutable
const birthYear = 1970;
// birthYear = 1920; => this will error
// const job; => this will also error

/*
  const is best unless you are sure the variable will change
  var should be avoided
  It is possible to declare a variable without keyword, but should be avoided
*/

// Assignment 3: let, const and var
const language2 = 'English';
console.log(language2);
// language2 = 'French'; => this fails

// End Assignment 3: let, const and var