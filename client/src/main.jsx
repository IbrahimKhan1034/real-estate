import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
import './index.css'
import { store } from './redux/store.js';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
=======
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
>>>>>>> e8ca77a72d1a2fa40e801419e3f878764916c325
  <Provider store={store}>
    <App />
  </Provider>

  
)
