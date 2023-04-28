const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allLiElem = ingredients.map((ingredient) => {
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  liElem.classList.add("item");

  console.log(liElem);
  return liElem;
});

console.log(allLiElem);

const list = document.querySelector("#ingredients");
list.append(...allLiElem);
