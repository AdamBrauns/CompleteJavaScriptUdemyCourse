// Coding Challenge 2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/

/* Test Data 1:
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
*/

// Test Data 2:
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);
} else if (BMIMark < BMIJohn) {
  console.log(
    `Johns's BMI (${BMIJohn}) is higher than Marks's BMI (${BMIMark})`
  );
} else {
  console.log(`Mark's BMI (${BMIMark}) is equal to John's BMI (${BMIJohn})`);
}
