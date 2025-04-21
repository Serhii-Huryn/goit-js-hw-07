const form = document.querySelector(".login-form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
form.addEventListener("submit", handler);

form.addEventListener("submit", event => {
	event.preventDefault();
});

const user = {}

function handler() {
    if (email.value === "" || password.value === "") {
        alert('All form fields must be filled in')
    } else {
        user.email = email.value.trim()
        user.password = password.value.trim()
        console.log(user);
        form.reset()
    }
}