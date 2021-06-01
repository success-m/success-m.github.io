import React from 'react';
import Article from '../Article';
import FreeTime from '../FreeTime';
import FullH1 from '../FullH1';
import FullHeight from '../FullHeight';
import More from '../More';
import P from '../P';
import Fitness from './Fitness';
import Music from './Music';
import New from './New';
import Photography from './Photography';

export default function Interest() {
  return (
    <Article className="white">
      <div className="container">
        <FullHeight className="row justify-content-center">
          <div className="col col-lg-6">
            <FullH1 className="center">What I do when I have time?</FullH1>
            <P className="center">
              The simple answer is, I do what looks interesting to me.
            </P>
          </div>
          <div style={{ width: '100%', height: '1px' }} />
          <FreeTime className="col">
            <Photography />
            <Music />
            <Fitness />
            <New />
          </FreeTime>
          <div style={{ width: '100%', margin: '5em' }}>
            <More to="/interests">More &#62;</More>
          </div>
        </FullHeight>
      </div>
    </Article>
  );
}
