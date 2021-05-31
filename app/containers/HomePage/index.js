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
import FullH1 from '../../components/FullH1';

import HalfHeight from '../../components/HalfHeight';
import More from '../../components/More';

import P from '../../components/P';
import Article from '../../components/Article';
import CareerJourneySection from '../../components/CareerJourneySection';
import InShortSection from '../../components/InShortSection';
import Interest from '../../components/Interest';

export default function HomePage() {
  return (
    <>
      {/* top banner section start */}
      <Article>
        <div className="container">
          <HalfHeight
            className="row justify-content-center"
            style={{ minHeight: '700px' }}
          >
            <div className="col col-lg-6 align-self-center">
              <FullH1 className="center">
                <FormattedMessage {...messages.header} />
              </FullH1>
              <P className="center">
                <FormattedMessage {...messages.info} />
              </P>
            </div>
          </HalfHeight>
        </div>
      </Article>
      {/* top banner section end */}
      <CareerJourneySection>
        <div style={{ width: '100%', margin: '5em' }}>
          <More to="/career">More &#62;</More>
        </div>
      </CareerJourneySection>
      <InShortSection />
      <Interest />
    </>
  );
}
