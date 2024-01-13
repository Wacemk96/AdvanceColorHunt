import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Flowbite} from 'flowbite-react';
import App from './App.jsx';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Flowbite>
        <App />
      </Flowbite>
    </BrowserRouter>
  </React.StrictMode>
);
