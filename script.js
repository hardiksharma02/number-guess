'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(
//   (document.querySelector('.message').textContent = 'correct number')
// );
// console.log((document.querySelector('.guess').value = 23));
let secreteNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreteNumber);
let score = 20;

const displaymessage = function (content) {
  document.querySelector('.message').textContent = content;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displaymessage('NO number');
  } else if (guess == secreteNumber) {
    document.querySelector('.message').textContent = 'correct number';
    displaymessage('correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secreteNumber;
  } else if (guess != secreteNumber) {
    if (score > 0) {
      displaymessage(guess > secreteNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secreteNumber);

  // document.querySelector('.message').textContent = 'Start guessing...';
  displaymessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
