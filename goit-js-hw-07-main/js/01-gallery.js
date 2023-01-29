import { galleryItems } from "./gallery-items.js";

const divEl = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
console.log(galleryItemsMarkup);

function createGalleryItemsMarkup(items) {
    return items.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    }).join('');
};

divEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

divEl.addEventListener('click', onModalOpen);

function onModalOpen(evt) {
    evt.preventDefault();

    if(evt.target.nodeName !== 'IMG') {  
        return;
    };

    console.log('target', evt.target);
    const instance = basicLightbox.create(` 
    <img src="${evt.target.dataset.source}">
    `)
    
    instance.show();
    
    if(instance.show) {
        document.addEventListener('keydown', (event)=>{
            if(event.code !== "Escape") {
                return;
            };
            console.log(event.code);
            instance.close();           
        })
    };

};


