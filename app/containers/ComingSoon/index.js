/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../../components/css/text.css';
import FullHeight from '../../components/FullHeight';
import FullH1 from '../../components/FullH1';
import messages from './messages';

export default function NotFound() {
  return (
    <div
      style={{
        // backgroundColor: `#fff`,
        color: '#fff',
        // color: `rgb(${getColor(3)
        //   .map(v => Math.min(v * 0.1, 255))
        //   .join(',')})`,
        // // position: 'fixed',
        // width: 'calc(100vw)',
        // zIndex: '9999',
      }}
    >
      <div className="container">
        <FullHeight className="row justify-content-center">
          <div className="col col-lg-6 align-self-center">
            <FullH1 className="center">
              <FormattedMessage {...messages.header} />
            </FullH1>
          </div>
        </FullHeight>
      </div>
    </div>
  );
}
