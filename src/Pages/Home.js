import React from 'react';
import './pages.css';
import Typewriter from 'typewriter-effect';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import styled from '@emotion/styled'
import IconButton from '@material-ui/core/IconButton';

const HomeContainer = styled.div`
  background: #1c1c1c;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1003px' height='900px' viewBox='0 0 1003 900' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com --%3E%3Ctitle%3EPath 2%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Design' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' opacity='0.15'%3E%3Cg id='Nav-2' transform='translate(-204.000000, 0.000000)' stroke='%23FFFFFF'%3E%3Cpath d='M1236,0 C1230.30374,209.548272 1090.22769,314.322407 815.771854,314.322407 C555.507614,314.322407 497.982719,453.635995 643.19717,732.26317 L643.197169,732.263171 C650.344231,745.976447 645.021263,762.887092 631.307988,770.034154 C626.575343,772.500706 621.23636,773.563356 615.919947,773.096928 C396.15415,753.816092 259.180835,816.117116 205,960' id='Path-2' transform='translate(720.500000, 480.000000) scale(-1, 1) translate(-720.500000, -480.000000) '%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: contain;
  margin-top: -10px;
  height: 100vh;
  width: 100vw;
`;

const Home = () => {
  return (
    <HomeContainer>
      <a href="mailto:nadavgabay2@gmail.com">
        <IconButton color="primary"    aria-label="upload picture" component="span" style={{color: 'white',height: '43px', width: '76px', float: 'right', marginTop: '31px'}} >
            <MailOutlineIcon  href="mailto:name@email.com" style={{color: 'white',height: '43px', width: '76px', float: 'right', marginTop: '31px'}} />
        </IconButton>
      </a>
      <span class="tags top-tags" style={{position: 'absolute', top: '44px', left: '125px'}}> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
      <span class="tags top-tags" style={{position: 'absolute', top: '127px', left: '235px'}}> &nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>

      <div className='typingContainer'>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>H</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>i</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>,</span>
      <br/> 
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>I</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>’</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>m</span> 
      &nbsp;&nbsp;
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>N</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>a</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>d</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>a</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>v</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>,</span>
      <br/>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>w</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>e</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>b</span> 
      &nbsp;&nbsp;
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>d</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>e</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>v</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>e</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>l</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>o</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>p</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>e</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>r</span>
      <span className="blast" aria-hidden="true" style={{"opacity": '1'}}>.</span>
      <span class="tags top-tags" style={{position: 'absolute', top: '288px', left: '653px'}}> &nbsp;&nbsp;&nbsp;&lt;/h1&gt;</span>

      <h2 className='h2-designed'>I'm a Full Stack Developer who loves working in Frontend, I have
              worked as a software developer since 2010.</h2>
      <Typewriter
        className='typewritter'
        loop
        deleteSpeed={1}
        onInit={(typewriter) => {
          typewriter
            .typeString(`Coding is my passion 😎`)
            .pauseFor(600)
            .deleteAll()
            .typeString(`I'm a 🍕 lover`)
            .pauseFor(600)
            .deleteAll()
            .typeString(`I'm a pretty fast learner and always interested in learning new technologies 🤓`)
            .pauseFor(600)
            .deleteAll()
            .typeString(`I think one of my values is the <strong>ability to resolve problems<strong>`)
            .pauseFor(600)
            .deleteAll()
            .typeString(`I like to share what I know 👨‍🏫`)
            .pauseFor(600)
            .deleteAll()
            .typeString(`I'm marrie‍d 🙍 with two little kids 👶👶 and iRobot 🤖`)
            .pauseFor(600)
            .deleteAll()
            .start();
        }}
      />
    </div>
    <span class="tags top-tags" style={{position: 'absolute', bottom: '71px', left: '125px'}}> &nbsp;&nbsp;&nbsp;&lt;/body&gt;</span>
    <span class="tags top-tags" style={{position: 'absolute', bottom: '41px', left: '100px'}}> &nbsp;&nbsp;&nbsp;&lt;/html&gt;</span>

  </HomeContainer>
  )
}

export default Home;
