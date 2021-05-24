/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import Language from '../../components/Language';
import LocaleToggle from '../LocaleToggle';

export default function App() {
  return (
    <div className="container-fluid">
      <Language>
        <LocaleToggle />
      </Language>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
