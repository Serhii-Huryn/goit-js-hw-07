const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handler);

function handler() {
    const text = input.value.trim()
    
    if (text !== "") {
        output.textContent = text;
    } else {
        output.textContent = "Anonymous";
    }
}