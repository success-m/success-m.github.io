import React from 'react';
import { Link } from 'react-router-dom';
import LocaleToggle from '../../containers/LocaleToggle';
import '../css/text.css';
import '../css/navBar.css';
import LogoFile from '../../images/icon-512x512.png';
import Logo from '../Logo';
import getColor from '../ColorCode';
import Navigation from '../../containers/Navigation';
import MenuToggle from './MenuToggle';

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
        <MenuToggle
          onClick={() => {
            if (document.getElementById('navbar').classList.contains('hide')) {
              document.getElementById('navbar').classList.remove('hide');
            } else {
              document.getElementById('navbar').classList.add('hide');
            }
          }}
        >
          |||
        </MenuToggle>
        <Link to="/">
          <Logo src={LogoFile} alt="successmalla.com.np" />
        </Link>
      </div>
      <div className="hide col-12 col-lg-10 center navbar" id="navbar">
        <Navigation />
      </div>
      <div className="col-12 col-lg-1 center">
        <LocaleToggle />
      </div>
    </div>
  );
}
