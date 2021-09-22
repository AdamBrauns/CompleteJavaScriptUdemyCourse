// Assignment 1: Values and Variables
let country = 'United States';
let continent = 'North America';
let population = 328.2;

console.log(country);
console.log(continent);
console.log(population);
// End Assignment 1: Values and Variables

// Assignment 2: Values and Variables
let isIsland = false;
let language1;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language1);
// End Assignment 2: Values and Variables

// Assignment 3: let, const and var
const language2 = 'English';
console.log(language2);
// language2 = 'French'; => this fails

// End Assignment 3: let, const and var

// Assignment 4: Basic Operators
let halfPopulation = population / 2;
halfPopulation++;
console.log(halfPopulation);

const finlandPopulation = 6;
console.log(population > finlandPopulation);

const avgPopulation = 33;
console.log(population > avgPopulation);
let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);
// End Assignment 4: Basic Operators

// Assignment 5 Strings and Template Literals
country = 'Portugal';
population = 11;
const language = 'portuguese';
// Old way:
//const description = country + ' is in Europe, and its ' + population + ' million people speak ' + language;
//console.log(description);

// New way:
description = `${country} is in Europe, and its ${population} million people speak ${language}`;
console.log(description);
// End Assignment 5 Strings and Template Literals

// Assignment 6: Taking decisions if else statements
// Other data:
// population = 13;
population = 130;
if ( population > avgPopulation ){
  console.log(`${country}'s population is above average'`);
} else {
  console.log(`${country}'s population is ${avgPopulation - population} below average.`);
}
// End Assignment 6: Taking decisions if else statements

// Assignment 7: Type Conversion and Coercion
let n;

n = '9' - '5'; // Results in 4
console.log(n);

n = '19' - '13' + '17'; // Results in 617
console.log(n);

n = '19' - '13' + 17; // Results in 23
console.log(n);

n = '123' < 57; // Results in false
console.log(n);

n = 5 + 6 + '4' + 9 - 4 - 2; // Results in 1143
console.log(n);
// End Assignment 7: Type Conversion and Coercion