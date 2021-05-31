import React from 'react';
import Article from '../Article';
import FullH1 from '../FullH1';
import P from '../P';
import HalfHeight from '../HalfHeight';

export default function InShortSection() {
  return (
    <Article>
      <div className="container">
        <HalfHeight className="row justify-content-center">
          <div className="col col-lg-6 align-self-center">
            <FullH1 className="center">In short</FullH1>
            <P className="center">
              I’m just a guy who is excited about IT Technology.
            </P>
          </div>
        </HalfHeight>
      </div>
    </Article>
  );
}
