import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");
  listItem.innerHTML = `
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`;
  galleryList.append(listItem);
});

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// Link-ul pentru documentatia de la acest exercitiu este incorect. Cel corect este https://www.jsdelivr.com/package/npm/simplelightbox
