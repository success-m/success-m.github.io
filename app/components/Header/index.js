import React from 'react';
import { Link } from 'react-router-dom';
// import LocaleToggle from '../../containers/LocaleToggle';
import '../css/text.css';
import '../css/navBar.css';
// import LogoFile from '../../images/logo45x45.png';
import Logo from '../Logo';
// import getColor from '../ColorCode';
import Navigation from '../../containers/Navigation';
// import MenuToggle from './MenuToggle';

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: `#fff`,
        color: '#264653',
        // color: `rgb(${getColor(3)
        //   .map(v => Math.min(v * 0.1, 255))
        //   .join(',')})`,
        // // position: 'fixed',
        // width: 'calc(100vw)',
        // zIndex: '9999',
      }}
    >
      <div className="container">
        <div className="row" style={{ lineHeight: '2' }}>
          <div className="col-12 col-md-3 center header-logo">
            {/* <MenuToggle
              onClick={() => {
                if (
                  document.getElementById('navbar').classList.contains('hide')
                ) {
                  document.getElementById('navbar').classList.remove('hide');
                } else {
                  document.getElementById('navbar').classList.add('hide');
                }
              }}
            >
              |||
            </MenuToggle> */}
            <Link to="/" className="logo">
              {/* <Logo src={LogoFile} alt="Success Malla" /> */}
              <Logo
                style={{
                  backgroundColor: '#264653',
                  color: '#fff',
                }}
              >
                Success
              </Logo>
              <Logo>Malla</Logo>
            </Link>
          </div>
          <div className="hide col-12 col-md-9 center navbar" id="navbar">
            <Navigation />
          </div>
          {/* <div className="col-12 col-md-2 center">
            <LocaleToggle />
          </div> */}
        </div>
      </div>
    </div>
  );
}
