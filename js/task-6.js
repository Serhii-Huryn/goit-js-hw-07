function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", createBoxes, Number(input.value));
destroy.addEventListener("click", destroyBoxes);

let divs = [];

function createBoxes(amount) {
  amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    boxes.innerHTML = "";
    let size = 30;
    for (let i = 1; i <= amount; i++) {
      const div = document.createElement("div");
      div.style.width = size + "px";
      div.style.height = size + "px";
      const color = getRandomHexColor();
      div.style.backgroundColor = color;
      div.style.color = color;
      div.textContent = "0";
      divs.push(div);
      size += 10;
    }
    boxes.append(...divs);
    divs = [];
    input.value = "";
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
