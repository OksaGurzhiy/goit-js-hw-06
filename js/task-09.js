function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanElem = document.querySelector(".color");

const body = document.querySelector("body");

const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", onBtnClick);

function onBtnClick() {
  spanElem.textContent = getRandomHexColor();
  body.style.backgroundColor = `${spanElem.textContent}`;

  return;
}
