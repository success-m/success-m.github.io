import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare as Fb,
  faInstagram as Insta,
  faLinkedin as Ln,
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope as Mail } from '@fortawesome/free-solid-svg-icons';
import Article from '../Article';
import FullH1 from '../FullH1';
import HalfHeight from '../HalfHeight';
import SocialIcons from './SocialIcons';
import P from '../P';

export default function Footer() {
  return (
    <footer>
      <Article className="footer">
        <div className="container">
          <HalfHeight className="row justify-content-center">
            <div className="col col-lg-6 align-self-center">
              <FullH1 className="center">Want to connect with me?</FullH1>
              <div className="center">
                <SocialIcons
                  href="https://www.facebook.com/success.malla"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={Fb} size="3x" />
                </SocialIcons>
                <SocialIcons
                  href="https://www.instagram.com/success_malla/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={Insta} size="3x" />
                </SocialIcons>
                <SocialIcons
                  href="https://np.linkedin.com/in/success-malla"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={Ln} size="3x" />
                </SocialIcons>
              </div>
              <div className="center">
                <P>Or Send me an Email at successmalla@gmail.com</P>
                <SocialIcons
                  href="mailto:successmalla@gmail.com"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={Mail} size="3x" />
                </SocialIcons>
              </div>
            </div>
          </HalfHeight>
        </div>
      </Article>
    </footer>
  );
}
