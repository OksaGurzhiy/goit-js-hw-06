const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (formElem.email.value !== "" && formElem.password.value !== "") {
    const obj = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);
    formElem.reset();
  } else {
    alert("All fields must be filled!");
  }
}
