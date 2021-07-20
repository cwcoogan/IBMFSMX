import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/style.scss';

import { HashRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './states/userState';

ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
