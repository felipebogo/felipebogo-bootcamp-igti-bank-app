import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

import { TransactionProvider } from './hooks/TransactionProvider';

export default function App() {
  console.log('prcoesso',process.env);
  return (
    <BrowserRouter>
      <TransactionProvider>
        <Routes />
        <GlobalStyle />
      </TransactionProvider>
    </BrowserRouter>);
}
