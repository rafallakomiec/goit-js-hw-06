'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  amount = Number.parseInt(amount);
  if (amount > 0 && amount <= 100) {
    const targetElem = document.querySelector('#boxes');
    const htmlElems = [];
    let nextBoxSize = 30;
    let startAtBox = 1;

    if (targetElem.children.length !== 0) {
      startAtBox = targetElem.children.length;
      nextBoxSize += targetElem.children.length * 10;
    }

    for (let i = startAtBox, size = nextBoxSize; i <= amount; i++, size += 10) {
      const htmlElem = document.createElement('div');
      htmlElem.style.height = size + 'px';
      htmlElem.style.width = size + 'px';
      htmlElem.style.backgroundColor = getRandomHexColor();
      htmlElems.push(htmlElem);
    }

    targetElem.append(...htmlElems);
  }
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const amount = document.querySelector('#controls input').value;
  createBoxes(amount);
});

document.querySelector('[data-destroy]').addEventListener('click', () => {
  document.querySelector('#boxes').innerHTML = '';
});
