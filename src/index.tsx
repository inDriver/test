import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { App } from './App';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com',
});

const GlobalStyle = createGlobalStyle`
    *[role='listbox'] {
        position: absolute !important;
        top: auto !important;
        left: auto !important;
    }
`;

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <>
                <GlobalStyle />
                <App />
            </>
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
