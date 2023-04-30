const allLiElem = document.querySelectorAll(".item");
// console.log(`Number of categories:`, allLiElem.length);

// const allLi = document.querySelectorAll("li.item h2");
// console.log(allLi);
const ulElem = document.querySelector("#categories");

console.log(`Number of categories:`, ulElem.children.length);
const allTitles = document.querySelectorAll("h2");
allTitles.forEach((title) => {
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${title.nextElementSibling.children.length}`);
});
