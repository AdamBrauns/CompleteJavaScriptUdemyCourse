'use strict';
// Arrays
const friend1 = 'Frank';
const friend2 = 'Larry';
const friend3 = 'Joe';

// More common way
const friends = ['Frank', 'Larry', 'Joe'];
console.log(friends);
// Less common way
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // calling the 0th item
console.log(friends[2]);
console.log(friends.length); // number of elements in array
console.log(friends[friends.length - 1]); // getting the last item in the array

// Arrays are not primitive, therefore, you can modify it even though its a const
friends[2] = 'Fred'; // can mutate items directly
console.log(friends);
// friends = ['Bob', 'Alice']; This will fail

const firstName = 'Joe';
const jonas = [firstName, 'Schmoe', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function ( birthYear ) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);