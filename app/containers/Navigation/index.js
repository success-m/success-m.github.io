import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import NavLinks from '../../components/Header/NavLinks';
import NavWrapper from '../../components/Header/NavWrapper';
import NavA from '../../components/Header/NavA';

export default function Navigation() {
  const links = [
    messages.link0,
    messages.link1,
    messages.link2,
    messages.link3,
  ];

  return (
    <NavWrapper>
      {links.map((l, i) => (
        <NavLinks key={i.toString()}>
          <NavA href={l.link}>
            <FormattedMessage {...l} />
          </NavA>
        </NavLinks>
      ))}
    </NavWrapper>
  );
}
