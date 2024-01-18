import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Flowbite} from 'flowbite-react';
import App from './App.jsx';
import './index.css';
import {PaletteProvider} from './Context/PaletteContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <PaletteProvider>
    <BrowserRouter>
      <Flowbite>
        <App />
      </Flowbite>
    </BrowserRouter>
  </PaletteProvider>
);
