const inputElem = document.querySelector("#font-size-control");

const spanElem = document.querySelector("#text");

inputElem.addEventListener("input", () => {
  const currentValueInput = inputElem.valueAsNumber;

  spanElem.style.fontSize = `${currentValueInput}px`;
});
