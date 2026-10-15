const picture = document.querySelector('#picture').content;

const createPicture = (photo) => {
  const pictureElement = picture.cloneNode(true);
  const image = pictureElement.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.description;

  const comments = pictureElement.querySelector('.picture__comments');
  comments.textContent = photo.comments.length;

  const likes = pictureElement.querySelector('.picture__likes');
  likes.textContent = photo.likes;

  return pictureElement;
};


const renderPictures = (photos) => {
  const container = document.querySelector('.pictures');
  const fragment= document.createDocumentFragment();

  photos.forEach((photo) => {

    fragment.appendChild(createPicture(photo));
  });

  container.appendChild(fragment);
};

export { createPicture, renderPictures };

