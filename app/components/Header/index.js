import React from 'react';
import LocaleToggle from '../../containers/LocaleToggle';
import '../css/text.css';
import LogoFile from '../../images/icon-512x512.png';
import Logo from '../Logo';
import NavWrapper from './NavWrapper';
import NavLinks from './NavLinks';
import getColor from '../ColorCode';
import { camelCase } from 'lodash';
import Navigation from '../../containers/Navigation';

export default function Header() {
  return (
    <div
      className="row"
      style={{
        backgroundColor: `rgb(${getColor(4)
          .map(v => Math.min(v * 1.345, 255))
          .join(',')})`,
        color: `rgb(${getColor(3)
          .map(v => Math.min(v * 0.1, 255))
          .join(',')})`,
        position: 'fixed',
        width: 'calc(100vw)',
        zIndex: '9999',
      }}
    >
      <div className="col-12 col-lg-1 center">
        <a href="/">
          <Logo src={LogoFile} alt="successmalla.com.np" />
        </a>
      </div>
      <div className="col-12 col-lg-10 center">
        <Navigation />
      </div>
      <div className="col-12 col-lg-1 center">
        <LocaleToggle />
      </div>
    </div>
  );
}
