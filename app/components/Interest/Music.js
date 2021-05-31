import React from 'react';
import FreeTimeBox from '../FreeTime/FreeTimeBox';
import P from '../P';

import MusicPng from '../../images/music.png';

export default function Music() {
  return (
    <FreeTimeBox>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={MusicPng} />
      <P>Music</P>
    </FreeTimeBox>
  );
}
