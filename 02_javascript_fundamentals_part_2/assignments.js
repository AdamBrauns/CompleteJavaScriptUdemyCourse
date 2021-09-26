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