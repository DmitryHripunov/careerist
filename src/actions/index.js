import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { Action } from "redux";

import printDate from '../js/customDate';
let commentId = 0;

export const addComment = (name, text) => {
  // console.log(token)
  return {
    type: 'ADD_COMMENT',
    id: commentId++,
    name,
    text,
    date: printDate(),
  }
};

export const getComments = () => (state) => {
  return {
    type: 'GET_COMMENT',
    id: state.id,
    name: state.name,
    text: state.text,
    date: state.date,
  }

  // const token = getState().app;
  // console.log(token)
  // dispatch(showLoader());

  // axios
  // .get('https://careerist-app.herokuapp.com/')
  // .then((resp) => {
  //   dispatch({
  //     type: 'SET_USERDATA',
  //     id: resp.commentId,
  //     name: resp.name,
  //     text: resp.text,
  //   });
  // })
  // .catch((er) => {
  //   dispatch(
  //     showAlert(
  //       `Во время загрузки данных произошла ошибка. Пожалуйста, попробуйте позднее. ${er}`
  //     )
  //   );
  // });
};

