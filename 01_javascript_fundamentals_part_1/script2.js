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

// Strings and Template Literals
const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;

const jonas = "I'm " + firstName + ', a ' + ( currentYear - birthYear ) + ' year old ' + job + '!';
console.log(jonas); 

// String literal
const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(jonasNew);

// You can also use it without variables (some devs are going this route)
console.log(`Normal string`);

// For multi-lines, string literal is much cleaner
console.log('String with \n\
multiple\n\
lines');

console.log(`String with
multiple
lines`);

// Taking Decisions: if / else statements
const age = 15;
const drivingAge = 16;

if ( age >= drivingAge ) {
  console.log(`Sarah can start driving`);
} else {
  const yearsLeft = drivingAge - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} year(s).`);
}

let century;
const birthYear2 = 2012;

if ( birthYear2 <= 2000 ) {
  century = 20;
} else {
  century = 21;
}
console.log(century);