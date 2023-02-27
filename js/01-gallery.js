import { galleryItems } from './gallery-items.js';
// Change code below this line

function creatCardImagesMarkup (images) {
	return images
	  .map(({ preview, original, description }) => {
		 return `<div class="gallery__item">
	<a class="gallery__link" href="${original}">
	  <img
		 class="gallery__image"
		 src="${preview}"
		 data-source="${original}"
		 alt="${description}"
	  />
	</a>
 </div>`;
	  })
	  .join('');
 }
  

const galleryBox = document.querySelector('.gallery');
const cardsMarkup = creatCardImagesMarkup(galleryItems);


galleryBox.innerHTML = cardsMarkup;

galleryBox.addEventListener('click', onClick);

function onClick(event) {
	event.preventDefault();
	if (event.target.nodeName !== 'IMG') {
		 return;
	};

	const modal = basicLightbox.create(
		 `<img src="${event.target.dataset.source}" width="800" height="600">`,

		 {   onShow: () => window.addEventListener('keydown', onEscKeyPress),
			  onClose: () => window.removeEventListener('keydown', onEscKeyPress),
		 }
	);
	
	modal.show();

	function onEscKeyPress(event) {   
		 if (event.code === "Escape") {
			  modal.close();
		 }
	};
};



console.log(galleryItems);
