import React, { useEffect } from 'react';
import Article from '../../components/Article';
import Card from '../../components/Card';
import Div from '../../components/Div';
import FullH1 from '../../components/FullH1';
import FullHeight from '../../components/FullHeight';
import HalfHeight from '../../components/HalfHeight';
import P from '../../components/P';

import Fitness from '../../images/fitness.png';
import Music from '../../images/music.png';
import New from '../../images/new.png';
import Photography from '../../images/photography.png';

export default function Interest() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      img: Photography,
      title: 'Photography',
      desc:
        'This is something of a new found interest. Once I held a camera in my hand, somehow things got clear. Things got simple.',
    },
    {
      img: Music,
      title: 'Music',
      desc:
        'In 2010, I went to get a beginner session on playing guitar. Since then I have had an on-and-off relation with it. But whenever I do hold it in my hands, I feel complete.',
    },
    {
      img: Fitness,
      title: 'Fitness',
      desc:
        'I will be honest with you. I have not stepped in the gym since 2020 because of this whole COVID situation. But I do try to exersise at home.',
    },
    {
      img: New,
      title: 'New',
      desc:
        'Well just about anything that I have not done or seen before. I know this is a grey area. But in a nutshell it includes places I have not been to, food that I wanted to try, you get the idea.',
    },
  ];

  return (
    <>
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
                The simple answer is, I do what looks interesting to me.
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
