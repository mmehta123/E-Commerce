import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
//4 import store from store.js
import store from './redux/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 5 wrap all app with global store
    <Provider store={store}>
    <App />
  </Provider >
);

