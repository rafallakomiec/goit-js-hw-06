"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorInfoPointer = document.querySelector(".color");

document.querySelector(".change-color").addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorInfoPointer.textContent = color;
});