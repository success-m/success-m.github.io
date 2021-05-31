import React from 'react';
import FreeTimeBox from '../FreeTime/FreeTimeBox';
import P from '../P';

import FitnessPng from '../../images/fitness.png';

export default function Fitness() {
  return (
    <FreeTimeBox>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={FitnessPng} />
      <P>Fitness</P>
    </FreeTimeBox>
  );
}
