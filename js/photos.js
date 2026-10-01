import { getRandomInteger } from './utils';
import { createComments } from './comments';


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

export const  createPhotos = () => {
  const photosList = [];
  for (let i =0; i < 25; i++){
    photosList.push(createPhoto(i));
  }
  return photosList;

};
