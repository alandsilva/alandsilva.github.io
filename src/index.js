import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <Typography />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
