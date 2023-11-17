// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryUl = document.querySelector('.gallery');

const galleruImg = galleryItems
  .map(
    galleryItem =>
      ` <li class="gallery__item">
    <a class="gallery__link" href=${galleryItem.original}>
      <img
        class="gallery__image"
        src= ${galleryItem.preview}
        alt= ${galleryItem.description}
      />
    </a>
  </li>
`
  )
  .join('');

galleryUl.style.listStyle = 'none';

galleryUl.innerHTML = galleruImg;


var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: `alt`,
});
console.log(lightbox);
