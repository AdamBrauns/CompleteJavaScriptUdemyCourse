// Operator Precedence
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSara = currentYear - 2018;
console.log(currentYear - 1991 > currentYear - 2018);

console.log(25 - 10 - 5); // left to right operation
let x, y;
x = y = 25 - 10 - 5; // right to left operation
console.log(x, y);

const avgAge = ( ageJonas + ageSara ) / 2;
console.log(ageJonas, ageSara, avgAge);