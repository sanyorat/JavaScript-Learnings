'use strict';

const secretNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

let score = 20;
let highScore = 0;
let guess = 0;

let number = secretNumber();
console.log(number, 'secret');

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess);
});

let updateScore = () => {
  score--;
  document.querySelector('.score').textContent = score;
  !score ? (document.querySelector('.message').textContent = 'You lost') : '';
};

let isCorrect = () => {
  score > highScore
    ? ((document.querySelector('.highscore').textContent = score),
      (highScore = score))
    : '';
};
document.querySelector('.check').addEventListener('click', function () {
  !guess
    ? (document.querySelector('.message').textContent = 'Invalid Entry')
    : guess > 0 && guess <= 20
    ? guess < number
      ? ((document.querySelector('.message').textContent = 'Too low'),
        updateScore())
      : guess > number
      ? ((document.querySelector('.message').textContent = 'Too High'),
        updateScore())
      : ((document.querySelector('.message').textContent = 'Correct Answer'),
        isCorrect())
    : (document.querySelector('.message').textContent = 'Number out of range!');
});
document.querySelector('.again').addEventListener('click', function () {
  score = 21;
  document.querySelector('.message').textContent = 'Play again!';
  updateScore();
  number = secretNumber();
  console.log(number, 'secret');
});
