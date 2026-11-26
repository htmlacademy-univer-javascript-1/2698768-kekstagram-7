import { renderPictures } from './picture.js';
import { createPhotos } from './photos.js';
import './form.js';

const photos = createPhotos();

renderPictures(photos);
