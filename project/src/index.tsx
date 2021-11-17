import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {createAPI} from './services/api';
import {requireAuthorization, ThunkAppDispatch} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';
import {redirect} from './store/middleware/redirect';
import {rootReducer} from './store/root-reducer';
import { Router as BrowserRouter } from 'react-router-dom';
import browserHistory from './browser-history';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api), redirect)),
);

(store.dispatch as ThunkAppDispatch)(fetchOffersAction());
(store.dispatch as ThunkAppDispatch)(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history ={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
