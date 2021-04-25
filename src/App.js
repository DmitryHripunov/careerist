import './css/main.global.css';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { hot } from 'react-hot-loader/root';

import rootReducer from './reducers';
import Container from './containers/container';

const initialStore = [];
 
const store = createStore(rootReducer, initialStore, composeWithDevTools(
  applyMiddleware(thunk)
));

const timeout = () => (dispatch, getState) => {
  dispatch({ type: 'START' });
  setTimeout(() => {
    dispatch({ type: 'FINISH' });
  }, 1500)
}

function AppComponent() {
  useEffect(() => {
    store.dispatch(timeout())
  })

  return(
    <Provider store={store}>
      <Container />,
    </Provider>
  
  // document.getElementById('react_root')
  )
}
export const App = hot(() => <AppComponent />);

 