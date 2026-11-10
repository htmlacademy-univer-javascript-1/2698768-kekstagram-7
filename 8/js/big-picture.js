const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');

const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');

const commentCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const closeButton = bigPicture.querySelector('.big-picture__cancel');

let currentComments = [];
let currentCommentsCount = 0;
const createCommentElement = (comment) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');

  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  img.width = 35;
  img.height = 35;

  const p = document.createElement('p');
  p.classList.add('social__text');
  p.textContent = comment.message;

  li.appendChild(img);
  li.appendChild(p);

  return li;
};

const showNextComments = () => {
  const portion = currentComments.slice(currentCommentsCount, currentCommentsCount + 5);

  portion.forEach((comment) => {
    socialComments.appendChild(createCommentElement(comment));
  });

  currentCommentsCount += portion.length;

  commentCountBlock.textContent = `${currentCommentsCount} из ${currentComments.length} комментариев`;


  if (currentCommentsCount >= currentComments.length) {
    commentsLoader.classList.add('hidden');
  }
};


const showBigPicture = (photo) => {
  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;

  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;


  currentComments = photo.comments;
  currentCommentsCount = 0;
  socialComments.innerHTML = '';

  commentCountBlock.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  showNextComments();

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  socialComments.innerHTML = '';
};


closeButton.addEventListener('click', closeBigPicture);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
    closeBigPicture();
  }
});

commentsLoader.addEventListener('click', showNextComments);

export { showBigPicture };
