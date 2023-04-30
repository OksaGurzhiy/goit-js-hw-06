function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControls = document.querySelector("#controls");
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

let amount;

input.addEventListener("input", () => {
  amount = input.valueAsNumber;
  console.log(amount);
});

createButton.addEventListener("click", () => createBoxes(amount));

const destroyBoxes = () => (divBoxes.innerHTML = "");

function createBoxes(amount) {
  if (input.value === "") {
    return alert("Введите число от 1 до 100");
  }
  destroyBoxes();
  let size = 20;

  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const divElemInBox = document.createElement("div");
    divElemInBox.style.backgroundColor = getRandomHexColor();
    divElemInBox.style.width = `${size}px`;
    divElemInBox.style.height = `${size}px`;
    divBoxes.append(divElemInBox);
  }
  input.value = "";
}

destroyButton.addEventListener("click", destroyBoxes);
