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
import ComingSoon from 'containers/ComingSoon/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import InterestPage from 'containers/Interest/Loadable';
import Career from 'containers/Career/Loadable';

import GlobalStyle from '../../global-styles';
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function App() {
  return (
    <div id="main-wrapper">
      {/* header here */}
      <Header />
      {/* header ends here */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/interests" component={InterestPage} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/documentation" component={ComingSoon} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      {/* footer section start */}
      <Footer />
      {/* footer section end */}
    </div>
  );
}
