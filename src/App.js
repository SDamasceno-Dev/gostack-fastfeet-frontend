/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Main page of the App
 */

//  Import dependencies
import React from 'react';
import { Router } from 'react-router-dom';

// import configurations
import './config/ReactotronConfig';

// Others imports
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
