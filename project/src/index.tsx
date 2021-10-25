import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from '@reduxjs/toolkit';
import {reducer} from './store/reduser';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
