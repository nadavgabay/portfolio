import React from 'react'
import JobPage from './JobPage';

const Tradair = () => {
  const content = [
    { title: 'Real Time Trading System', image: '/tnet3.png'},
    { title: 'Customizeable', description: 'Full White Label support', image: '/tnet6.png'},
    { title: 'BI', image: '/tla.png'},
    { title: 'Analytics', image: '/tla3.png'},
  ];

  const jobInfoTitle ="TradAir"
  const jobInfoSubTitle = "Full Stack Team Leader,  Senior Front End Developer, Aug 2017-Jan 2020"
  const jobDescription = () => {
    return (
      <>
      <li>In charge of the front end development in the company</li>
      <li>Responsible for the BI and analytics </li>
      <li>Manage a full migration from Backbone.js to React</li>
      <li>Design, Architecture and code projects</li>
      </>
    )
  }

  const skills = [
  {
    title: "rabbit mq",
    url: 'https://christianibarguen.com/static/3879e0017f48964465fe367c57363fbc/c0bbd/rabbitmq.png'
  },
  {
    title: "mongodb",
    url: ' https://christianibarguen.com/static/ac78fbc2b9d061d2e5d515fbc2d03aa0/c0bbd/mongodb.png'
  },
  {
    title: "chai",
    url: 'https://christianibarguen.com/static/d49c0f2b33a8be79bf1c1d12be310a70/c0bbd/chai.png'
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
    title: "html5",
    url: 'https://christianibarguen.com/static/d3fa1f96cf67ef88f3a688cef8917a19/c0bbd/html5.png'
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
    title: "git",
    url: 'https://christianibarguen.com/static/c78f33195d7e6e9b89bd93f219fc2c01/c0bbd/git.png'
  },
  ]

  return <JobPage content={content} skills={skills} jobDescription={jobDescription} jobInfoSubTitle={jobInfoSubTitle} jobInfoTitle={jobInfoTitle} />

}

export default Tradair


