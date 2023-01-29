import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
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
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
       `;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryContainerClick);
// делегирование клика
function onGalleryContainerClick(e) {
  e.preventDefault();
  const isLink = e.target.classList.contains("gallery__item");
  if (!isLink) {
    return;
  }
}
// подключение библиотеки SimpleLightbox
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  enableKeyboard: true,
});
