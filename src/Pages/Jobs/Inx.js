import React from 'react'
import JobPage from './JobPage';

const Inx = () => {
  const content = [
    { title: 'Crypto Currencies Exchange', image: '/INX.png'},
    { title: 'KYC Solution', image: '/INX3.png'},
    { title: 'Reports', image: '/INX4.png'}
  ];

  const jobInfoTitle ="INX Limited"
  const jobInfoSubTitle = "Full Stack Developer, Jan 2020 to Today"
  const jobDescription = () => {
    return (
      <>
        <li>Built the first Regulatory Crypto Exchange System</li>
        <li>Deal with large scale system </li>
        <li>Responsible for the front end in the company </li>
      </>
    )
  }

  const skills = [
    {
      title: "chai",
      url: 'https://christianibarguen.com/static/d49c0f2b33a8be79bf1c1d12be310a70/c0bbd/chai.png'
    },
  {
    title: "rabbit mq",
    url: 'https://christianibarguen.com/static/3879e0017f48964465fe367c57363fbc/c0bbd/rabbitmq.png'
  },
  {
    title: "mongodb",
    url: ' https://christianibarguen.com/static/ac78fbc2b9d061d2e5d515fbc2d03aa0/c0bbd/mongodb.png'
  },
  {
    title: "React",
    url: '/react.png'
  },
  {
    title:"rest",
    url: 'https://christianibarguen.com/static/fbc4dc69e0251695e79eb0b8ffbe604e/c0bbd/restful.png'
  },
  {
    title: "node",
    url:  'https://christianibarguen.com/static/3da133eb73395e06173c47fd90a93b2d/c0bbd/nodejs.png'
  },
  {
    title: "js",
    url: '/js.png'
  },
  {
    title: "redux",
    url: 'https://christianibarguen.com/static/d400f061769c6643b7b824ae74620cf5/c0bbd/redux.png'
  },
  {
    title: "socket.io",
    url: 'https://christianibarguen.com/static/8dab92c9c5bb92a4b63aa83e4a928f92/c0bbd/socket-io.png'
  },
  {
    title: "css3",
    url: 'https://christianibarguen.com/static/b791dc60f67d8d5797e4331be32174b5/c0bbd/css3.png'
  },
  {
    title: "aws ec2",
    url: 'https://christianibarguen.com/static/029ae654975d9cde866dd6089a9095ae/c0bbd/aws-ec2.png'
  },
  {
    title: "elastic",
    url: '/elastic.png'
  },
  {
    title: "puppeteer",
    url: '/puppeteer.png'
  },
  {
    title: "redis",
    url: '/redis.png'
  },
  ]

  return <JobPage content={content} skills={skills} jobDescription={jobDescription} jobInfoSubTitle={jobInfoSubTitle} jobInfoTitle={jobInfoTitle} />

}

export default Inx


