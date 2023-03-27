'use strict';

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const htmlElems = [];

for (const ingredient of ingredients) {
  const htmlElem = document.createElement('li');
  htmlElem.textContent = ingredient;
  htmlElem.classList.add('item');
  htmlElems.push(htmlElem);
}

document.querySelector('#ingredients').append(...htmlElems);
