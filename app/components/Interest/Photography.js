import React from 'react';
import FreeTimeBox from '../FreeTime/FreeTimeBox';
import P from '../P';

import PhotographyPng from '../../images/photography.png';

export default function() {
  return (
    <FreeTimeBox>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={PhotographyPng} />
      <P>Tech Stuff</P>
    </FreeTimeBox>
  );
}
