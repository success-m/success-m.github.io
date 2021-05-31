import React from 'react';
// import LocaleToggle from '../../containers/LocaleToggle';
import '../css/text.css';
// import LogoFile from '../../images/logo45x45.png';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
// import getColor from '../ColorCode';
import Navigation from '../../containers/Navigation';
import Article from '../Article';
import BoxLogo from '../Logo/BoxLogo';
import LogoWrapper from '../Logo/LogoWrapper';
// import MenuToggle from './MenuToggle';

export default function Header() {
  return (
    <header>
      <Article className="white">
        <div className="container">
          <div className="row" style={{ lineHeight: '2' }}>
            <LogoWrapper className="col-12 col-md-4 center">
              <Link to="/">
                {/* <Logo src={LogoFile} alt="Success Malla" /> */}
                <BoxLogo className="box-logo">Success</BoxLogo>
                <Logo>Malla</Logo>
              </Link>
              <h1 style={{ display: 'none' }}>Success Malla</h1>
            </LogoWrapper>
            <div className="hide col-12 col-md-8 center navbar">
              <Navigation />
            </div>
            {/* <div className="col-12 col-md-2 center">
            <LocaleToggle />
          </div> */}
          </div>
        </div>
      </Article>
    </header>
  );
}
