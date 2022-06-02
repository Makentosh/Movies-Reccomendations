import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppRouting } from './components';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={ client }>
      <AppRouting/>
    </ApolloProvider>
  </React.StrictMode>
);
