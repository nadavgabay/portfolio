import React from 'react'
import JobPage from './JobPage';

const Tradair = () => {
  const content = [
    {  image: '/duda.gif'},
  ];

  const jobInfoTitle ="Duda - Web Site Builder"
  const jobInfoSubTitle = "Graduated Full Stack Developer, Student Automation developer, Jul 2013-Aug 2017"
  const jobDescription = () => {
    return (
      <>
      <li>Build B2B solution for building fast and responsive websites</li>
      <li>Been part of the team who built Duda's new editor using React</li>
      <li>Server Side programming using Java and Spring </li>
      <li>Enhancement and maintanance of the site builder system using jQuery and Ember </li>
      <li>As student, I developed E2E automation using Selenium and Java</li>
      </>
    )
  }

  const skills = [
  {
    title: "React",
    url: '/react.png'
  },
  {
    title: "chai",
    url: 'https://christianibarguen.com/static/d49c0f2b33a8be79bf1c1d12be310a70/c0bbd/chai.png'
  },
  {
    title: "java",
    url: '/java.png'
  },
  {
    title:"rest",
    url: 'https://christianibarguen.com/static/fbc4dc69e0251695e79eb0b8ffbe604e/c0bbd/restful.png'
  },
  {
    title: "html5",
    url: 'https://christianibarguen.com/static/d3fa1f96cf67ef88f3a688cef8917a19/c0bbd/html5.png'
  },
  {
    title: "js",
    url: '/js.png'
  },
  {
    title: "jquery",
    url: '/jquery.png'
  },
  {
    title: "css3",
    url: 'https://christianibarguen.com/static/b791dc60f67d8d5797e4331be32174b5/c0bbd/css3.png'
  },
  {
    title: "git",
    url: 'https://christianibarguen.com/static/c78f33195d7e6e9b89bd93f219fc2c01/c0bbd/git.png'
  },
  {
    title: "selenium",
    url: '/selenium.png'
  },
  {
    title: "applitools",
    url: '/applitools.png'
  }
  ]

  return <JobPage content={content} skills={skills} jobDescription={jobDescription} jobInfoSubTitle={jobInfoSubTitle} jobInfoTitle={jobInfoTitle} />

}

export default Tradair


