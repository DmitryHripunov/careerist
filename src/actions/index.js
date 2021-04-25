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

export const setUserData = () => (dispatch, getState) => {
  const token = getState().app.token;
  dispatch(showLoader());

  axios
    .get("https://oauth.reddit.com/api/v1/me", {
      headers: { Authorization: `bearer ${token}` },
    })
    .then((resp) => {
      dispatch({
        type: SET_USERDATA,
        name: resp.data.name,
        iconImg: uriToLink(resp.data.icon_img),
        messageCount: resp.data.inbox_count.toString(),
      });
      dispatch(hideLoader());
    })
    .catch((er) => {
      dispatch(
        showAlert(
          `Во время загрузки данных произошла ошибка. Пожалуйста, попробуйте позднее. ${er}`
        )
      );
      dispatch(hideLoader());
    });
};

