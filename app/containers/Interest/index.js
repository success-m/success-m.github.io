import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Article from '../../components/Article';
import Card from '../../components/Card';
import Div from '../../components/Div';
import FullH1 from '../../components/FullH1';
import FullHeight from '../../components/FullHeight';
import HalfHeight from '../../components/HalfHeight';
import P from '../../components/P';

import New from '../../images/new.png';
import Photography from '../../images/photography.png';

export default function Interest() {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      img: Photography,
      title: 'Tech Stuff',
      desc: `When I see something done, I always have a question how.
      This is the reason I am motivated to look into available tech to create these things.
      I know there are a lot of options out there. But hey, each one of them is pretty interesting.
      `,
    },
    {
      img: New,
      title: 'Anything New',
      desc: `Well just about anything that I have not done or seen before.
      I know this is a grey area.
      But in a nutshell it includes places I have not been to, food that I wanted to try, you get the idea.`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Success Malla - Interest</title>
        <meta
          name="description"
          content="A techie guy who is drawn to the latest technology stack in the industry."
        />
        <link rel="canonical" href="https://successmalla.com.np/interests" />
      </Helmet>
      {/* top banner start */}
      <Article>
        <div className="container">
          <HalfHeight
            className="row justify-content-center"
            style={{ minHeight: '700px' }}
          >
            <div className="col col-lg-6 align-self-center">
              <FullH1 className="center">Interests</FullH1>
              <P className="center">
                I am a techie guy who is drawn to the latest technology stack in
                the industry. The simple answer is, I do what looks interesting
                to me.
              </P>
            </div>
          </HalfHeight>
        </div>
      </Article>
      {/* top banner end */}
      {/* interests start */}
      <Article className="grey">
        <div className="container">
          <FullHeight className="row justify-content-center">
            <div className="col col-lg-6 align-self-center">
              <FullH1 className="center">What exactly?</FullH1>
              <P className="center">
                These are some of the things that I spend my time when free.
              </P>
            </div>
            <Div className="card">
              {data.map((l, i) => (
                <Card
                  key={i.toString()}
                  className={i % 2 === 0 ? 'even' : 'odd'}
                >
                  <div className="card-wrapper">
                    <div className="image-wrapper center">
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
                      <img src={l.img} />
                      <P>{l.title}</P>
                    </div>
                    <P className="info center">{l.desc}</P>
                  </div>
                </Card>
              ))}
            </Div>
            <div className="col col-lg-6 align-self-center">
              <P className="center" style={{ margin: '25% auto' }}>
                Want to see more? Links to my social media is just below.
              </P>
            </div>
          </FullHeight>
        </div>
      </Article>
      {/* interests end */}
    </>
  );
}
