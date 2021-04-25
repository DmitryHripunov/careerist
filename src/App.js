import './css/main.global.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import ReactDOM from 'react-dom';
import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { hot } from 'react-hot-loader/root';

import rootReducer from './reducers';
import Container from './containers/container';

const initialStore = []

const store = createStore(rootReducer, initialStore, composeWithDevTools());

function AppComponent() {
  return(
    <Provider store={store}>
      <Container />,
    </Provider>
  
  // document.getElementById('react_root')
  )
}
export const App = hot(() => <AppComponent />);

 