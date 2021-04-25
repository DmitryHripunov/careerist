import printDate from '../js/customDate';
let commentId = 0;

export const addComment = (name, text) => {
  return {
    type: 'ADD_COMMENT',
    id: commentId++,
    name,
    text,
    date: printDate(),
  }
};

export const removeComment = (id) => {
  return {
    type: 'REMOVE_COMMENT',
    id,
  }
};

