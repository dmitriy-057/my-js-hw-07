import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

galleryContainer.insertAdjacentHTML(
  "beforeend",
  createImagesCardsMarkup(galleryItems)
);
function createImagesCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
       `;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryContainerClick);

// Реализация делегирования на div.gallery и получение url большого изображения.

function onGalleryContainerClick(e) {
  e.preventDefault();
  const IsGalleryImage = e.target.classList.contains("gallery__image");
  // указываем цель клику
  if (!IsGalleryImage) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src='${e.target.dataset.source}'/>`
  );
  instance.show(() => console.log("lightbox now visible"));
}

// вариант с методом .nodeName
// function onGalleryContainerClick(e) {
//   e.preventDefault();

//   if (e.target.nodeName !== "IMG") {
//     return;
//   }

//   const instance = basicLightbox.create(
//     `<img src='${e.target.dataset.source}'/>`
//   );
//   instance.show(() => console.log("lightbox now visible"));
// }
