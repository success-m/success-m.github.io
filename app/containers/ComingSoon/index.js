/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../../components/css/text.css';
import Article from '../../components/Article';
import FullHeight from '../../components/FullHeight';
import FullH1 from '../../components/FullH1';
import messages from './messages';
import P from '../../components/P';

export default function NotFound() {
  return (
    <Article className="grey">
      <div className="container">
        <FullHeight className="row justify-content-center">
          <div className="col col-lg-6 align-self-center">
            <FullH1 className="center">
              <FormattedMessage {...messages.header} />
            </FullH1>
            <P className="center">I am still working on this.</P>
            <P className="center">Have an idea? Connect with me.</P>
          </div>
        </FullHeight>
      </div>
    </Article>
  );
}
