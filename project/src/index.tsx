import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const countOffer = 6;

ReactDOM.render(
  <React.StrictMode>
    <App countOffer={countOffer}/>
  </React.StrictMode>,
  document.getElementById('root'));
