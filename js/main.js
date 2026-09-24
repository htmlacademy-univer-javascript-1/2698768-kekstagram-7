const getRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];


const commentText = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.'
];

const names = [
  'маша',
  'оля',
  'дима',
  'костя',
  'даша',
  'толя'
];


let commentId = 0;
const  createComment = () => {
  commentId += 1;
  return {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomElement(commentText),
    name: getRandomElement(names),
  };
};


const  createComments = () => {
  const count = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(createComment());
  }
  return comments;
};


const createPhoto = (index) => {
  const id = index + 1;
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: 'my lovely puppy',
    likes: getRandomInteger(15, 200),
    comments: createComments(),
  };
};

const  createPhotos = () => {
  const photosList = [];
  for (let i =0; i < 25; i++){
    photosList.push(createPhoto(i));
  }
  return photosList;

};

export const photos = createPhotos();

