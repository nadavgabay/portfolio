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
        <li>Responsible for large scale system </li>
        <li>Responsible for the front end in the company </li>
      </>
    )
  }

  const skills = [
    {
      title: "chai",
      url: '/chai.png'
    },
  {
    title: "rabbit mq",
    url: '/rabbitmq.png'
  },
  {
    title: "mongodb",
    url: '/mongodb.png'
  },
  {
    title: "React",
    url: '/react.png'
  },
  {
    title:"rest",
    url: '/restful.png'
  },
  {
    title: "node",
    url:  '/nodejs.png'
  },
  {
    title: "js",
    url: '/js.png'
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
    title: "aws ec2",
    url: '/aws-ec2.png'
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


