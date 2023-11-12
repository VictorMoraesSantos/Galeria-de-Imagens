const containerItems = document.querySelector('#container-items');
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const images = [
  { id: 1, url: './img/chrono.jpg' },
  { id: 2, url: './img/inuyasha.jpg' },
  { id: 3, url: './img/ippo.png' },
  { id: 4, url: './img/tenchi.jpg' },
  { id: 5, url: './img/tenjhotenge.jpg' },
  { id: 6, url: './img/yuyuhakusho.jpg' },
];

const loadImages = (image, container) => {
  image.forEach((img) => {
    container.innerHTML += `<div class='item'>
      <img src='${img.url}'>
    </div>`;
  });
};

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const next = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll('.item');
};

const previous = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll('.item');
};

previousButton.addEventListener('click', previous);
nextButton.addEventListener('click', next);
