import React from 'react';
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core';
import { rubberBand } from 'react-animations';
import City from '../Components/City/City';

const HomeContainer = styled.div`
  background: #1c1c1c;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1003px' height='900px' viewBox='0 0 1003 900' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com --%3E%3Ctitle%3EPath 2%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Design' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' opacity='0.15'%3E%3Cg id='Nav-2' transform='translate(-204.000000, 0.000000)' stroke='%23FFFFFF'%3E%3Cpath d='M1236,0 C1230.30374,209.548272 1090.22769,314.322407 815.771854,314.322407 C555.507614,314.322407 497.982719,453.635995 643.19717,732.26317 L643.197169,732.263171 C650.344231,745.976447 645.021263,762.887092 631.307988,770.034154 C626.575343,772.500706 621.23636,773.563356 615.919947,773.096928 C396.15415,753.816092 259.180835,816.117116 205,960' id='Path-2' transform='translate(720.500000, 480.000000) scale(-1, 1) translate(-720.500000, -480.000000) '%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: contain;
  height: 100vh;
  width: 100vw;
`;

const About = () => {
  const rubberBandAnimation = keyframes`${rubberBand}`;

  const RubberBandStyled = styled.div`
    animation: 1s ${rubberBandAnimation};
    color: #08fdd8;
  `;

  const TypingContainer = styled.div`
    width: 603px;
    display: block;
    cursor: default;
    position: absolute;
    top: 31vh;
    left: 15vw;
`;

  return (
    <HomeContainer>
      <span class="tags top-tags" style={{color: '#515152', position: 'absolute', top: '44px', left: '125px'}}> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
      <span class="tags top-tags" style={{color: '#515152', position: 'absolute', top: 'calc(30vh - 3px)', left: '235px'}}> &nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>

      <TypingContainer>
        <RubberBandStyled className="blast" aria-hidden="true" style={{"opacity": '1'}}>a</RubberBandStyled>
        <RubberBandStyled className="blast" aria-hidden="true" style={{"opacity": '1'}}>b</RubberBandStyled>
        <RubberBandStyled className="blast" aria-hidden="true" style={{"opacity": '1'}}>o</RubberBandStyled>
        <RubberBandStyled className="blast" aria-hidden="true" style={{"opacity": '1'}}>u</RubberBandStyled>
        <RubberBandStyled className="blast" aria-hidden="true" style={{"opacity": '1'}}>t</RubberBandStyled>
        &nbsp;&nbsp;
        <RubberBandStyled className="blast" aria-hidden="true" style={{"opacity": '1'}}>m</RubberBandStyled>
        <RubberBandStyled className="blast" aria-hidden="true" style={{"opacity": '1'}}>e</RubberBandStyled>
        <span class="tags top-tags" style={{color: '#515152', position: 'absolute', top: 'calc(23vh - 14px)', left: 'calc(30vw - 2px)'}}> &nbsp;&nbsp;&nbsp;&lt;/h1&gt;</span>

        <h2 className='h2-designed'>Professionally connected with the web development industry and information technology for many years.</h2>
        <h2 className='h2-designed'>Well-organised person, problem solver, know and love to lead teams, independent employee with high attention to detail. Fan of photography, outdoor activities, TV series and fantasy books. A family person, father of two amazing kids.</h2>
        
    </TypingContainer>
    <span class="tags top-tags" style={{color: '#515152', position: 'absolute', bottom: '71px', left: '125px'}}> &nbsp;&nbsp;&nbsp;&lt;/body&gt;</span>
    <span class="tags top-tags" style={{color: '#515152', position: 'absolute', bottom: '41px', left: '100px'}}> &nbsp;&nbsp;&nbsp;&lt;/html&gt;</span>
    <div style={{
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      right: 0,
      top: '0'
    }}>
    {/* <City /> */}
    </div>
    <>
  </>,

  </HomeContainer>
  )
}

export default About;
