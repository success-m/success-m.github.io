import React from 'react';
import Article from '../Article';
import CareerJourney from '../CareerJourney';
import CareerArrow from '../CareerJourney/careerArrow';
import CareerBox from '../CareerJourney/careerBox';
import CareerCircle from '../CareerJourney/careerCircle';
import CareerText from '../CareerJourney/careerText';
import FullH1 from '../FullH1';
import FullHeight from '../FullHeight';
import P from '../P';
import Arrow from '../../images/Arrow.png';

export default function CareerJourneySection(props) {
  return (
    <Article className="white">
      <div className="container">
        <FullHeight className="row justify-content-center">
          <div className="col col-lg-6">
            <FullH1 className="center">Career Journey</FullH1>
            <P className="center">From building Sites to Big Data computing.</P>
          </div>
          <div style={{ width: '100%', height: '1px' }} />
          <CareerJourney className="col">
            <CareerBox>
              <CareerCircle className="active">
                <CareerText>Big Data Computing</CareerText>
              </CareerCircle>
            </CareerBox>
            <CareerArrow className="top-arrow" src={Arrow} />
            <CareerBox>
              <CareerCircle>
                <CareerText>ETL Developer</CareerText>
              </CareerCircle>
            </CareerBox>
            <CareerArrow className="top-arrow" src={Arrow} />
            <CareerBox>
              <CareerCircle>
                <CareerText>Python Developer</CareerText>
              </CareerCircle>
            </CareerBox>
            <div
              className="break"
              style={{ width: '100%', margin: '20px', textAlign: 'right' }}
            >
              <CareerArrow className="mid-arrow" src={Arrow} />
            </div>
            <CareerBox>
              <CareerCircle>
                <CareerText>PHP Wordpress Developer</CareerText>
              </CareerCircle>
            </CareerBox>
            <CareerArrow src={Arrow} />
            <CareerBox>
              <CareerCircle>
                <CareerText>Javascript Developer</CareerText>
              </CareerCircle>
            </CareerBox>
            <CareerArrow src={Arrow} />
            <CareerBox>
              <CareerCircle>
                <CareerText>Wordpress Again</CareerText>
              </CareerCircle>
            </CareerBox>
          </CareerJourney>
          {/* eslint-disable-next-line react/prop-types */}
          {props.children}
        </FullHeight>
      </div>
    </Article>
  );
}
