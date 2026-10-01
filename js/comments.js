import { getRandomInteger, getRandomElement } from './utils';

import { commentText, names } from './data';


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


export const  createComments = () => {
  const count = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(createComment());
  }
  return comments;
};
