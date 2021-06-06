/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../../components/css/text.css';
import { Helmet } from 'react-helmet';
import FullHeight from '../../components/FullHeight';
import FullH1 from '../../components/FullH1';
import messages from './messages';
import Article from '../../components/Article';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Success Malla - Not Found</title>
        <meta name="description" content="Page not found." />
      </Helmet>
      <Article className="grey">
        <div className="container">
          <FullHeight className="row justify-content-center">
            <div className="col col-lg-6 align-self-center">
              <FullH1 className="center">
                <FormattedMessage {...messages.header} />
              </FullH1>
            </div>
          </FullHeight>
        </div>
      </Article>
    </>
  );
}
