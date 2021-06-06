import React from 'react';
import Article from '../Article';
import Div from '../Div';
import FreeTime from '../FreeTime';
import FreeTimeBox from '../FreeTime/FreeTimeBox';
import FullH1 from '../FullH1';
import FullHeight from '../FullHeight';
import P from '../P';
import TalendPng from '../../images/talend.png';
import FlaskPng from '../../images/flask.png';
import PythonPng from '../../images/python2.png';
import LaravelPng from '../../images/laravel.png';
import WordpressPng from '../../images/wordpress.png';
import JsPng from '../../images/js.png';
import JqueryPng from '../../images/jquery.png';
import ReactPng from '../../images/react.png';
import NodePng from '../../images/node.png';
import JasperPng from '../../images/jasper.png';

export default function CareerNotBigDataSection() {
  const data = [
    { png: TalendPng, title: 'Talend Open Studio' },
    { png: FlaskPng, title: 'Flask' },
    { png: PythonPng, title: 'Python' },
    { png: LaravelPng, title: 'Laravel' },
    { png: WordpressPng, title: 'Wordpress' },
    { png: JsPng, title: 'Vanilla JavaScript' },
    { png: JqueryPng, title: 'jQuery' },
    { png: ReactPng, title: 'React' },
    { png: NodePng, title: 'NodeJS' },
    { png: JasperPng, title: 'Jaspersoft' },
  ];

  return (
    <>
      <Article className="white">
        <div className="container">
          <FullHeight className="row justify-content-center">
            <div className="col col-lg-6 align-self-center">
              <FullH1 className="center">Stuff that’s not Big Data</FullH1>
              <P className="center">
                These are other things that I have been involved with over the
                years.
              </P>
            </div>
            <Div />
            <FreeTime className="col">
              {data.map((l, i) => (
                <FreeTimeBox key={i.toString()} className="not-big-data">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img src={l.png} />
                  <P>{l.title}</P>
                </FreeTimeBox>
              ))}
            </FreeTime>
          </FullHeight>
        </div>
      </Article>
    </>
  );
}