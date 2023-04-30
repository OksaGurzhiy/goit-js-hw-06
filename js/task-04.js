let counterValue = 0;

const span = document.querySelector("#value");

const divCounter = document.querySelector("#counter");

const btnDecrement = divCounter.firstElementChild;

const btnIncrement = divCounter.lastElementChild;

btnDecrement.addEventListener("click", () => {
  const newValue = (span.textContent = counterValue - 1);
  counterValue = newValue;
});

btnIncrement.addEventListener("click", () => {
  const newValue = (span.textContent = counterValue + 1);
  counterValue = newValue;
});
