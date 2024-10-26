import React from 'react';
import ReactDOM from 'react-dom/client';
import 'https://irinakossova.github.io/Groceries/src/index.css';
import Groceries from 'https://irinakossova.github.io/Groceries/src/Groceries.js';
import reportWebVitals from 'https://irinakossova.github.io/Groceries/src/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Groceries/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();