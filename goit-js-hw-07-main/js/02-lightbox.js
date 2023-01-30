import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
console.log(galleryItemsMarkup);

function createGalleryItemsMarkup(items) {
    return items.map(({preview, original, description}) => {
       return `<div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      </div>`
    }).join('');
}

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryEl.addEventListener('click', onModalOpen);

function onModalOpen(evt) {
    evt.preventDefault();
    
    if(evt.target.nodeName !== "IMG") {
        return;
    };

    console.log('target', evt.target);
    const lightbox = new SimpleLightbox('.gallery__item', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        enableKeyboard: true,
    });
};

