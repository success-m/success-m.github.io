import React from 'react';
import Article from '../Article';
import Card from '../Card';
import Div from '../Div';
import FullH1 from '../FullH1';
import FullHeight from '../FullHeight';
import P from '../P';

import PrestoImg from '../../images/Presto.png';
import SparkImg from '../../images/spark.png';
import EmrImg from '../../images/EMR.png';
import RedshiftImg from '../../images/redshift.png';
import S3Img from '../../images/S3.png';
import PythonImg from '../../images/python.png';

export default function CareerBigDataSection() {
  const data = [
    {
      img: PrestoImg,
      title: 'Presto (Now Trino)',
      desc: `Trino is a great tool for data processing. It is just a query engine but it can query data from just about anything and it is fast. I have used trino to query data in hive partitions and it is great.   `,
    },
    {
      img: SparkImg,
      title: 'Apache Spark',
      desc: `Apache Spark is a large scale data processing engine. It does all the processing in memory making it faster than Hadoop map reduce or Hive.  My ETL workloads are efficient with Spark.`,
    },
    {
      img: EmrImg,
      title: 'AWS EMR',
      desc: `AWS EMR is simply a cluster of EC2 instances. You have the flexibility to add nodes according to your convenience. With this, you can run any data processing jobs. I have used this to run Trino, Spark, Hive for my data work loads.`,
    },
    {
      img: RedshiftImg,
      title: 'AWS Redshift',
      desc: `Redshift is a distributed data warehouse. It is great for OLAP work loads. At its core it is a PostgreSQL database. With Redshift you turn on the cluster, load your data in and run analytical queries.`,
    },
    {
      img: S3Img,
      title: 'AWS S3',
      desc: `AWS S3 is a file server in the cloud. Why S3? The answer is simply, to set a central data store. The advantage here is all the tools above and more, can access the data.`,
    },
    {
      img: PythonImg,
      title: 'Python',
      desc: `Lets face it, Python is awesome. You can do anything with Python. There are a lot of tools for Big Data computing, however the real use cases, these tools need to be connected. This is where python comes in for just about anything.`,
    },
  ];

  return (
    <>
      <Article className="grey">
        <div className="container">
          <FullHeight className="row justify-content-center">
            <div className="col col-lg-6 align-self-center">
              <FullH1 className="center">Big Data Stuff</FullH1>
              <P className="center">
                Tools I have worked with to solve Big problems in Big Data.
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
                There are many more tools in the domain of big data computing.
                More to be added soon.
              </P>
            </div>
          </FullHeight>
        </div>
      </Article>
    </>
  );
}
