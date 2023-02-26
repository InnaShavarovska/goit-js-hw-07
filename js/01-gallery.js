import { galleryItems } from './gallery-items.js';
// Change code below this line


function creatCardImagesMarkup (images) {
     return images.map(({ preview, original, description }) => {
		  return `
		  <div class = "gallery__item">
		  <a class = "gallery__link" href = "${original}">
		  <img class = "gallery__img" 
		  src = "${preview}"
		  data-source = "${original}"
		  alt = "${description}"/>
		  </a>
		  </div> `}).join("");
};

const galleryBox = document.querySelector('.gallery');
const cardsMarkup = creatCardImagesMarkup(galleryItems);

galleryBox.innerHTML = cardsMarkup;

galleryBox.addEventListener('click', onClick);

const instance = basicLightbox.create(`<img width="1280" height="720" src="#">`, {onShow: (instance) => {window.addEventListener('keydown', onEscKeyPress)},
onClose: (instance) => {window.removeEventListener('keydown', onEscKeyPress)}});



function onClick (event) {
	event.preventDefault();
	instance.element().querySelector('img').src = event.target.dataset.source;
	instance.show(); 
};

function onEscKeyPress (event) {
	if (event.code !== 'Escape') return;
	instance.close();
 }

console.log(galleryItems);
