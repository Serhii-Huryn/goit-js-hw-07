function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const control = document.querySelector('#controls');
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);

function createBoxes() {
  const amount = input.value;
  let boxSize = 30;
  let boxesHTML = '';
  boxes.innerHTML = '';
  if (amount >= 1 && amount <= 100) {
    for (let i = 1; i <= amount; i++) {
      const boxColor = getRandomHexColor();
      const box = `<div style='width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor};'></div>`;
      boxesHTML += box;
      boxSize += 10;
    }
  }
  input.value = '';
  boxes.insertAdjacentHTML('beforeEnd', boxesHTML);
}

btnDestroy.addEventListener('click', () => {
  boxes.innerHTML = '';
});
