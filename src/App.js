/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Main page of the App
 */

//  Import dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

// import configurations
import './config/ReactotronConfig';

// Others imports
import Routes from './routes';
import history from './services/history';

import store from './store'; // Always must be placed after ReactotronConfig

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
