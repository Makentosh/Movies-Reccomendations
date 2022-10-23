import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloLink, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';
import App from '../App';
import SettingsPage from '../../pages/Settings';
import Home from '../../pages/Home';
import Recommend from '../../pages/Recommend';
import I18nProvider from '../../providers/i18n';
import { AppContext } from '../../providers/appContext';

const AppRouting = () => {
  const { state } = useContext(AppContext);
  let url = process.env.NODE_ENV === 'development' ? `http://localhost:80` : window.location.origin;

  const httpLink = new HttpLink({ uri: `${ url }/graphql` });
  const localeMiddleware = new ApolloLink((operation, forward) => {
    const customHeaders = operation.getContext().hasOwnProperty('headers') ? operation.getContext().headers : {};

    operation.setContext({
      headers: {
        ...customHeaders,
        locale: state.locale
      }
    });
    return forward(operation);
  });

  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true
  });

  return (
    <ApolloProvider client={ client }>
      <I18nProvider locale={ state.locale }>
        <Routes>
          <Route path="/" element={ <App/> }>
            <Route index element={ <Home/> }/>
            <Route path="settings" element={ <SettingsPage/> }/>
            <Route path="recommend" element={ <Recommend/> }/>
          </Route>
        </Routes>
      </I18nProvider>
    </ApolloProvider>
  );
};

export default AppRouting;
