/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import '../../components/css/textCenter.css';
import FullHeight from '../../components/FullHeight';
import FullH1 from '../../components/FullH1';

export default function HomePage() {
  return (
    <FullHeight className="row justify-content-center">
      <div className="col col-lg-6 align-self-center">
        <FullH1 className="center">
          <FormattedMessage {...messages.header} />
        </FullH1>
      </div>
    </FullHeight>
  );
}
