import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';

import { ApolloClient } from '@apollo/client';
import { HttpLink } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

// graphql cache
const cache = new InMemoryCache();

// graphql API endpoint
const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
  },
});

// Apollo Client
const client = new ApolloClient({
  link: httpLink,
  cache,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

