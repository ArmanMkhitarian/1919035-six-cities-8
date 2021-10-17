import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';

const countOffer = 6;

ReactDOM.render(
  <React.StrictMode>
    <App
      countOffer={countOffer}
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
