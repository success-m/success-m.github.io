/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import '../../components/css/text.css';
import FullHeight from '../../components/FullHeight';
import FullH1 from '../../components/FullH1';
import getColor from '../../components/ColorCode';

export default function HomePage() {
  return (
    <>
      <FullHeight
        className="row justify-content-center"
        style={{
          backgroundColor: `rgb(${getColor(4)
            .map(v => Math.min(v * 1.345, 255))
            .join(',')})`,
          color: `rgb(${getColor(3)
            .map(v => Math.min(v * 0.1, 255))
            .join(',')})`,
        }}
      >
        <div className="col col-lg-6 align-self-center">
          <FullH1 className="center">
            <FormattedMessage {...messages.header} />
          </FullH1>
          <p className="center" style={{ fontSize: '1.5em' }}>
            <FormattedMessage {...messages.info} />
          </p>
        </div>
      </FullHeight>
    </>
  );
}
