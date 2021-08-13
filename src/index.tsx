import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import { GlobalStyle } from './style/Global'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Routes />
  </React.Fragment>,
  document.getElementById('root')
);

