'use strict';

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const htmlElems = [];

for (const image of images) {
  const html = `<li><img class="task3-gallery__img" src="${image.url}" alt="${image.alt}" /></li>`;
  htmlElems.push(html);
}

const gallery = document.querySelector('.gallery');
gallery.classList.add('task3-gallery');
gallery.insertAdjacentHTML('beforeend', htmlElems.join(''));
