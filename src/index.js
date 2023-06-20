import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CreateGlobal } from 'createGlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateGlobal></CreateGlobal>
    <App />
  </React.StrictMode>
);
