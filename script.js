'use strict';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreteNumber);
let score = 20;

const displayMessage = function (content) {
  document.querySelector('.message').textContent = content;
};

document.querySelector('.guess').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('.check').click();
  }
});
document.querySelector('.check').addEventListener('click', function (event) {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Please enter the number');
  } else if (guess === secreteNumber) {
    document.querySelector('.check').style.display = 'none';
    displayMessage('🎉 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('.number').style.filter = 'none';
    
  } else {
    const difference = Math.abs(secreteNumber - guess);
    let hint = '';

    if (difference > 5) {
      hint = '🚀 Too ';
      hint += guess > secreteNumber ? 'high!' : 'low!';
    } else {
      hint = '🔥 Getting ';
      hint += guess > secreteNumber ? 'closer, but still high!' : 'closer, but still low!';
    }

    if (score > 0) {
      displayMessage(hint);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function (event) {
  event.preventDefault();

  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secreteNumber);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
