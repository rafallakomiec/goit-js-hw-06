'use strict';

const categoriesList = document.querySelector('#categories');
const numberOfCategories = categoriesList.children.length;

console.log(`Number of categories: ${numberOfCategories}.`);

const itemsArr = categoriesList.querySelectorAll('.item');
for (const item of itemsArr) {
  const itemTitle = item.querySelector('h2').textContent;
  const itemsNumber = item.querySelector('ul').children.length;

  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${itemsNumber}`);
}
