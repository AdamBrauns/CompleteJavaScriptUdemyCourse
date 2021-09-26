// Assignment 1: Functions
function describeCountry ( country, population, capitalCity ) {
  const returnStr = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return returnStr;
}

const finlandStr = describeCountry('Finland', 6, 'Helsinki');
const unitedStatesStr = describeCountry('United States', 330, 'Washington, D.C.');
const chinaStr = describeCountry('China', 1400, 'Beijing');

console.log(finlandStr);
console.log(unitedStatesStr);
console.log(chinaStr);

// End Assignment 1: Functions

// Assignment 2: Function declarations vs expressions
function percentageOfWorld1 ( population ) {
  return ( population / 7900 ) * 100;
}

const finlandPercent1 = percentageOfWorld1(6);
const unitedStatesPercent1 = percentageOfWorld1(330);
const chinaPercent1 = percentageOfWorld1(1400);

const percentageOfWorld2 = function ( population ) {
  return ( population / 7900 ) * 100;
}

const finlandPercent2 = percentageOfWorld2(6);
const unitedStatesPercent2 = percentageOfWorld2(330);
const chinaPercent2 = percentageOfWorld2(1400);

console.log(finlandPercent1, finlandPercent2);
console.log(unitedStatesPercent1, unitedStatesPercent2);
console.log(chinaPercent1, chinaPercent2);
// End Assignment 2: Function declarations vs expressions

// Assignment 3: Arrow functions
const percentageOfWorld3 = population => ( population / 7900 ) * 100;
const finlandPercent3 = percentageOfWorld3(6);
const unitedStatesPercent3 = percentageOfWorld3(330);
const chinaPercent3 = percentageOfWorld3(1400);

console.log(finlandPercent3);
console.log(unitedStatesPercent3);
console.log(chinaPercent3);
// End Assignment 3: Arrow functions

// Assignment 4: Functions calling other functions
const describePopulation = ( country, population ) => {
  countryPopulationPercent = percentageOfWorld1(population);
  return `${country} has ${population} million people which is about ${countryPopulationPercent}% of the world`;
}
console.log(describePopulation('Finland', 6));
console.log(describePopulation('United States', 330));
console.log(describePopulation('China', 1400));
// End Assignment 4: Functions calling other functions