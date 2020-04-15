import React from 'react'
import JobPage from './JobPage';

const Tradair = () => {
  const content = [
    { image: '/tnet11.png'},
    { image: '/tnet12.png'},
    { image: '/tnet3.png'},
    { image: '/tnet6.png'},
    { title: 'BI', image: '/tla.png'},
    { title: 'Analytics', image: '/tla3.png'},
  ];

  const jobInfoTitle ="TradAir - FX and Crypto Trading System"
  const jobInfoSubTitle = "Full Stack Team Leader,  Senior Front End Developer, Aug 2017-Jan 2020"
  const jobDescription = () => {
    return (
      <>
      <li>Team lead for Front End development</li>
      <li>Responsible for the BI and analytics </li>
      <li>Lead a team of Front End's and Full Stack's developers </li>
      <li>Managed a full migration from Backbone.js to React for the main company product</li>
      <li>Planned, designed, and coded new parts of multiple products</li>
      <li>Oversaw major system refactor to handle increasing scale and traffic </li>
      </>
    )
  }

  const skills = [
  {
    title: "rabbit mq",
    url: '/rabbitmq.png'
  },
  {
    title: "backbone JS",
    url: '/backbone.png'
  },
  {
    title: "chai",
    url: '/chai.png'
  },
  {
    title:"rest",
    url: '/restful.png'
  },
  {
    title: "React",
    url: '/react.png'
  },
  {
    title: "jquery",
    url: '/jquery.png'
  },
  {
    title: "java script",
    url: '/js1.png'
  },
  {
    title: "node",
    url:  '/nodejs.png'
  },
  {
    title: "html5",
    url: '/html5.png'
  },
  {
    title: "redux",
    url: '/redux.png'
  },
  {
    title: "socket.io",
    url: '/socket-io.png'
  },
  {
    title: "css3",
    url: '/css3.png'
  },
  {
    title: "jest",
    url: '/jest.png'
  },
  {
    title: "aws ec2",
    url: '/aws-ec2.png'
  },
  {
    title: "git",
    url: '/git.png'
  },
  {
    title: "java",
    url: '/java.png'
  },
  ]

  return <JobPage content={content} skills={skills} jobDescription={jobDescription} jobInfoSubTitle={jobInfoSubTitle} jobInfoTitle={jobInfoTitle} />

}

export default Tradair


