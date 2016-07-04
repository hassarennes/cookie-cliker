var display = document.getElementById('display');
var click = document.getElementById('click');
var score = 0;
function displayScore() {
  display.innerHTML = score;
}
function increaseScore() {
  score += clickValue;
  buttonsEnabler();
  displayScore();
}
function autoclickF() {
  if (autoclickOn) {
    increaseScore();
  }
  displayScore();
  click.addEventListener('click', increaseScore);