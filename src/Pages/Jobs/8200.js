import React from 'react'
import JobPage from './JobPage';

const Army = () => {
  const content = [
    { title: 'Intelligence systems', image: '/python2.jpeg'},
    { image: '/army.jpg'},
    { image: '/location.jpg'},
  ];

  const jobInfoTitle ="8200 Unit"
  const jobInfoSubTitle = "Backend Engineer, 2010-2013"
  const jobDescription = () => {
    return (
      <>
      <li>Developed enterprise intelligence software systems in collaboration with <b>RAFAEL</b></li>
      <li>Performed system integration with parallel departments </li>
      <li>Designed and built Command and Control system </li>
      <li>Built real time simulation system </li>
      <li>Manageed and commanded team soldiers</li>
      </>
    )
  }

  const skills = [
    {
      title: "Google Earth",
      url: 'google_earth.png'
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
      title: "MATH LAB",
      url: '/mathlab.png'
    },
    {
      title: "sqlite",
      url: '/sqlite.png'
    },
    {
      title: "Python",
      url: '/python.png'
    },
  ]

  return <JobPage content={content} skills={skills} jobDescription={jobDescription} jobInfoSubTitle={jobInfoSubTitle} jobInfoTitle={jobInfoTitle} />

}

export default Army


