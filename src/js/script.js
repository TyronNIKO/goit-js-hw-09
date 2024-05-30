import Gallery from './1-gallery.js';
import Form from './2-form.js';
import images from './images.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new Gallery(images, '.gallery');
gallery.init();

const simp = new SimpleLightbox('.gallery a');
console.log(simp);

const form = new Form('.feedback-form', 'feedback-form-state');
form.init();
