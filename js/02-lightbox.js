import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const imagesList = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
  })
  .join("");
gallery.insertAdjacentHTML("afterbegin", imagesList);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
