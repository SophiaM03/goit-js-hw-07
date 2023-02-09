import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const imagesList = galleryItems
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
  .join("");
gallery.insertAdjacentHTML("afterbegin", imagesList);

gallery.addEventListener("click", handleOpenModal);

function handleOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();

  function closeModal(e) {
    if (e.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
