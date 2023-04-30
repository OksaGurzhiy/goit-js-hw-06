const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(email);

  if (formElem.email.value === "" || formElem.password.value === "") {
    alert("All fields must be filled!");
  }

  const obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);
  formElem.reset();
}
