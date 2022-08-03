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
    .join('');
}

function onImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    const evtOriginalImageLink = evt.target.dataset.source;
    const instance = basicLightbox.create(`<img src = ${evtOriginalImageLink}>`);
    instance.show();

    window.addEventListener('keydown', onEscPress);
}

function onCloseModalWithEsc() {
    window.removeEventListener('keydown', onEscPress);
}

function onEscPress(event) {
    if (event.code === 'Escape') {
    onCloseModalWithEsc();
    const modal = document.querySelector('.basicLightbox');
    modal.remove('basicLightbox');
    }
}

