'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Temporarily show the secret number
document.querySelector('.number').textContent = secretNumber;

const decreaseScore = function (guess, highLow) {
  if (score > 1) {
    document.querySelector('.message').textContent = `Too ${highLow}...`;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent =
      'You lost... Better luck next time...';
    document.querySelector('.score').textContent = 0;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number...';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > secretNumber) {
    decreaseScore(guess, 'High');
  } else if (guess < secretNumber) {
    decreaseScore(guess, 'Low');
  }
});
