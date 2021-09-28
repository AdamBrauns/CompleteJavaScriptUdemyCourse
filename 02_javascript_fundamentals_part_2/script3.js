'use strict';

// Object Methods
const joe = {
  firstName: 'Joe',
  lastName: 'Schmoe',
  birthYear: 1983,
  job: 'teacher',
  friends: ['Frank', 'Larry', 'Joe'],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  }
};

console.log(joe.calcAge());
// console.log(joe['calcAge']()); 
console.log(joe.age);
console.log(joe.age);

console.log(joe.getSummary());

// For loop
for ( let rep = 1; rep <= 10; rep ++ ){
  console.log(`Lifting weights, on repetition ${rep}...`);
}