import React from 'react';
import ReactDOM from 'react-dom/client';
import { CreateGlobal } from 'createGlobalStyle';
import RoutesPage from 'routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateGlobal></CreateGlobal>
    <RoutesPage></RoutesPage>
  </React.StrictMode>
);
