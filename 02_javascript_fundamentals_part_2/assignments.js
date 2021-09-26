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