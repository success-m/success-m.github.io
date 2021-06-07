/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import '../../components/css/text.css';
import FullH1 from '../../components/FullH1';
import Article from '../../components/Article';
import HalfHeight from '../../components/HalfHeight';
import P from '../../components/P';
import CareerJourneySection from '../../components/CareerJourneySection';
import CareerBigDataSection from '../../components/CareerBigDataSection';
import CareerNotBigDataSection from '../../components/CareerNotBigDataSection';

export default function Career() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Success Malla - Career</title>
        <meta
          name="description"
          content="I have been working in IT Industry since 2013. I am currently working as a Senior Software Engineer / Development Manager where I focus on BI infrastructure to solve requirements of e-commerce based clients. Mostly, I am involved in building data infrastructure, developing data pipelines, establishing coding conventions and defining processes."
        />
        <link rel="canonical" href="https://successmalla.com.np/career" />
      </Helmet>
      {/* Top banner start */}
      <Article>
        <div className="container">
          <HalfHeight
            className="row justify-content-center"
            style={{ minHeight: '700px' }}
          >
            <div className="col col-lg-6 align-self-center">
              <FullH1 className="center">Summary</FullH1>
              <P className="center">
                I have been working in IT Industry since 2013. I am currently
                working as a Senior Software Engineer / Development Manager
                where I focus on BI infrastructure to solve requirements of
                e-commerce based clients. Mostly, I am involved in building data
                infrastructure, developing data pipelines, establishing coding
                conventions and defining processes.
              </P>
              <P className="center">Want to know more? Scroll down.</P>
            </div>
          </HalfHeight>
        </div>
      </Article>
      {/* Top banner end */}
      <CareerJourneySection>
        <div style={{ width: '100%', margin: '2em', height: '1px' }} />
      </CareerJourneySection>
      <CareerBigDataSection />
      <CareerNotBigDataSection />
    </>
  );
}
