'use strict';

const fontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSize.addEventListener('change', () => {
  text.style.fontSize = fontSize.value + 'px';
});
