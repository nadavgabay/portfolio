import React from 'react'
import JobPage from './JobPage';

const Army = () => {
  const content = [
    { title: 'Intelligence systems', image: '/python2.jpeg'},
    { title: 'Intelligence systems', image: '/army.jpg'},
    { title: 'Intelligence systems', image: '/location.jpg'},
  ];

  const jobInfoTitle ="8200 Unit"
  const jobInfoSubTitle = "Backend Engineer, 2010-2013"
  const jobDescription = () => {
    return (
      <>
      <li>Develop enterprise intelligence software systems in collaboration with <b>RAFAEL</b></li>
      <li>Perform system integration with partner departments </li>
      <li>Design and build Command and Control system  </li>
      <li>Build real time simulation system  </li>
      <li>Manage and command on soldiers</li>
      </>
    )
  }

  const skills = [
    {
      title: "Python",
      url: '/python.png'
    },
    {
      title: "C#",
      url: '/asp.png'
    },
    {
      title: "linux",
      url: '/linux.png'
    },
    {
      title: "Google Earth",
      url: 'google_earth.png'
    },
    {
      title: "MATH LAB",
      url: '/mathlab.png'
    },
    {
      title: "sqlite",
      url: '/sqlite.png'
    },
  ]

  return <JobPage content={content} skills={skills} jobDescription={jobDescription} jobInfoSubTitle={jobInfoSubTitle} jobInfoTitle={jobInfoTitle} />

}

export default Army


