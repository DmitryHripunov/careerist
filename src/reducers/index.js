const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
    return [
      ...state,
      {id: action.id, name: action.name, text: action.text, date: action.date},
    ];

    case 'GET_COMMENT':
      return [
        state,
      ];

  default: return state;
  }
}

export default rootReducer;