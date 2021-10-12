'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Changing existing variable
      output = 'NEW OUTPUT';
      // Creating new variable
      // const output = 'NEWER OUTPUT';
    }
    // Does not work
    // console.log(str);
    console.log(millennial); // Works because we used var declaration
    // This works when strict mode is not enabled
    // add(2, 3);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// Will not work as its out of scope
// console.log(age);
// printAge();
