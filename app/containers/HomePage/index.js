/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import '../../components/css/text.css';
import FullH1 from '../../components/FullH1';

import HalfHeight from '../../components/HalfHeight';
import More from '../../components/More';

import P from '../../components/P';
import Article from '../../components/Article';
import CareerJourneySection from '../../components/CareerJourneySection';
import InShortSection from '../../components/InShortSection';
import Interest from '../../components/Interest';
import AskMe from '../../components/More/AskMe';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Success Malla - Home Page</title>
        <meta
          name="description"
          content="A Big Data Engineer passionate about exploring ways to process Big Data as my career. A techie guy who is drawn to the latest technology stack in the industry."
        />
        <link rel="canonical" href="https://successmalla.com.np" />
      </Helmet>
      {/* top banner section start */}
      <Article>
        <div className="container">
          <HalfHeight
            className="row justify-content-center"
            style={{ minHeight: '700px' }}
          >
            <div className="col col-lg-6 align-self-center">
              <FullH1 className="center">Success knows Big Data</FullH1>
              <P className="center">
                A Big Data Engineer passionate about exploring ways to process
                Big Data as my career. A techie guy who is drawn to the latest
                technology stack in the industry.
              </P>
              <P className="center">Have a question on Big Data computing?</P>
              <div style={{ width: '100%', marginTop: '1em' }}>
                <AskMe href="mailto:successmalla@gmail.com">Ask me &#62;</AskMe>
              </div>
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
