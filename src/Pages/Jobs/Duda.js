import React from 'react'
import JobPage from './JobPage';

const Tradair = () => {
  const content = [
    {  image: '/duda.gif'},
  ];

  const jobInfoTitle ="Duda - Web Site Builder"
  const jobInfoSubTitle = "Full Stack Developer, Student Automation developer, Jul 2013-Aug 2017"
  const jobDescription = () => {
    return (
      <>
      <li>Built B2B solution for building fast and responsive websites</li>
      <li>Part of the team who built Duda's new editor using React</li>
      <li>Server Side programming using Java and Spring </li>
      <li>Enhanced and maintained site builder system using jQuery and Ember</li>
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
    url: '/chai.png'
  },
  {
    title: "java",
    url: '/java.png'
  },
  {
    title:"rest",
    url: '/restful.png'
  },
  {
    title: "html5",
    url: '/html5.png'
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
    url: '/css3.png'
  },
  {
    title: "git",
    url: '/git.png'
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


