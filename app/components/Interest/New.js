import React from 'react';
import FreeTimeBox from '../FreeTime/FreeTimeBox';
import P from '../P';

import NewPng from '../../images/new.png';

export default function New() {
  return (
    <FreeTimeBox>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={NewPng} />
      <P>Anything new</P>
    </FreeTimeBox>
  );
}
