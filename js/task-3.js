const input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');

input.addEventListener('input', handleInput);

function handleInput(event) {
  const inputName = event.target.value.trim();
  output.textContent = inputName;
  if (inputName === '') {
    output.textContent = 'Anonymous';
  }
}
