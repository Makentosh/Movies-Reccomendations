import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppRouting } from './components';
import { AppContextProvider } from './providers/appContext';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <AppRouting/>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
