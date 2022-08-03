import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryEl = createGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryEl);
gallery.addEventListener('click', onImageClick);

function createGallery(galleryItems) {
    return galleryItems.map(({description, original, preview }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join('');
}

function onImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}