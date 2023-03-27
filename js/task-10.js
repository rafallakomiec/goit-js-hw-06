'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  amount = Number.parseInt(amount);
  if (amount > 0 && amount <= 100) {
    const htmlElems = [];

    for (let i = 0, size = 30; i < amount; i++, size += 10) {
      const htmlElem = document.createElement('div');
      htmlElem.style.height = size + 'px';
      htmlElem.style.width = size + 'px';
      htmlElem.style.backgroundColor = getRandomHexColor();
      htmlElems.push(htmlElem);
    }

    document.querySelector('#boxes').append(...htmlElems);
  }
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const amount = document.querySelector('#controls input').value;
  createBoxes(amount);
});

document.querySelector('[data-destroy]').addEventListener('click', () => {
  document.querySelector('#boxes').innerHTML = '';
});
