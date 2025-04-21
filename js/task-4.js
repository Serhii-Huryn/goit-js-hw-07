const form = document.querySelector('.login-form');
const dataSubmit = {};

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  dataSubmit.email = event.target.elements.email.value;
  dataSubmit.password = event.target.elements.password.value;
  if (dataSubmit.email === '' || dataSubmit.password === '') {
    alert('All form fields must be filled in');
    return console.log('Error!');
  }
  event.target.reset();
  console.log(dataSubmit);
}
