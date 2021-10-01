'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// temporarily show the secret number
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

  // no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No number...';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // guess is too high
  } else if (guess > secretNumber) {
    decreaseScore(guess, 'High');

    // guess is too low
  } else if (guess < secretNumber) {
    decreaseScore(guess, 'Low');
  }
});
