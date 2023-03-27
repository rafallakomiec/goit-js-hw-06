'use strict';

const counter = document.querySelector('#counter');
let counterVal = 0;
const counterValPointer = document.querySelector('#value');
counterValPointer.textContent = counterVal;

counter.querySelector("[data-action='decrement']").addEventListener('click', () => {
  counterVal--;
  counterValPointer.textContent = counterVal;
});

counter.querySelector("[data-action='increment']").addEventListener('click', () => {
  counterVal++;
  counterValPointer.textContent = counterVal;
});
