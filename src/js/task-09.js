function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const result = getRandomHexColor();
console.log(result);
const spanElem = document.querySelector(".color");

const body = document.querySelector("body");

const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", onBtnClick);

function onBtnClick() {
  spanElem.textContent = result;
  body.style.backgroundColor = result;
  return;
}
