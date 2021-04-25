const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
    return [
      ...state,
      {id: action.id, name: action.name, text: action.text, date: action.date},
    ];

  default: return state;
  }
}

export default rootReducer;