/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core';
import { rubberBand } from 'react-animations';
// import City from '../Components/City/City';
import { useSpring, animated as a, interpolate } from 'react-spring'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneOutlined from '@material-ui/icons/PhoneOutlined';
import IconButton from '@material-ui/core/IconButton';

const HomeContainer = styled.div`
  background: #1c1c1c;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1003px' height='900px' viewBox='0 0 1003 900' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com --%3E%3Ctitle%3EPath 2%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Design' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' opacity='0.15'%3E%3Cg id='Nav-2' transform='translate(-204.000000, 0.000000)' stroke='%23FFFFFF'%3E%3Cpath d='M1236,0 C1230.30374,209.548272 1090.22769,314.322407 815.771854,314.322407 C555.507614,314.322407 497.982719,453.635995 643.19717,732.26317 L643.197169,732.263171 C650.344231,745.976447 645.021263,762.887092 631.307988,770.034154 C626.575343,772.500706 621.23636,773.563356 615.919947,773.096928 C396.15415,753.816092 259.180835,816.117116 205,960' id='Path-2' transform='translate(720.500000, 480.000000) scale(-1, 1) translate(-720.500000, -480.000000) '%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: contain;
  height: 100vh;
  width: 100vw;
`;
const AvatarContainer = styled.div`
  height: 100%;
  overflow: hidden;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  padding-right: 50px;
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

  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
  const interpBg = xy.interpolate((x, y) => `perspective(400px) rotateY(${ 60}deg) rotateX(${ 60}deg) translate3d(-50%, -50%, 0)`)
  // const interpFace = st.interpolate(o => `translate(90,${105 + o / 4})`)
  const interpEye = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 90 + 76},${xy[1] / 160 + 90 + o / 2}) scale(0.8)`)
  // const interpIris = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30},${xy[1] / 30 + -10 + o / 8})`)
  // const interpPupil = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 25},${xy[1] / 25 + -10 + o / 8})`)
  // const interpSpot = interpolate([st, xy], (o, xy) => `translate(${8 + -xy[0] / 80},${-xy[1] / 80 + -10 + o / 8})`)
  // const interpMouth = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 18 + 188},${xy[1] / 20 + 230 + o / 1.7}) scale(0.8)`)
  // const interpHair = st.interpolate(o => `translate(79,${o / 4})`)
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
  const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [])

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
        
        <a href="mailto:nadavgabay2@gmail.com" style={{color: 'white',height: '31px', marginTop: '50px', padding: 0}} >
          <IconButton color="primary" aria-label="upload picture" component="span" style={{color: 'white', padding: '0 20px 0 0'}}>
              <MailOutlineIcon  href="mailto:name@email.com"  />
          </IconButton>
          Nadavgabay2@gmail.com
        </a>
  
    </TypingContainer>
    <span class="tags top-tags" style={{color: '#515152', position: 'absolute', bottom: '71px', left: '125px'}}> &nbsp;&nbsp;&nbsp;&lt;/body&gt;</span>
    <span class="tags top-tags" style={{color: '#515152', position: 'absolute', bottom: '41px', left: '100px'}}> &nbsp;&nbsp;&nbsp;&lt;/html&gt;</span>
    
  

    {/* <div style={{
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      right: 0,
      top: '0'
    }}>
      
    <City />
    </div> */}
    <AvatarContainer onMouseMove={onMove} onScroll={onScroll}>
    <a.svg xmlnsSvg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="280" width="264"><metadata/><defs>
      <path id="c" d="M12 160a120 120 0 10240 0h12V0H0v160h12z"/><path id="e" d="M124 145v18h4c40 0 72 32 72 72v9H0v-9c0-40 32-72 72-72h4v-18c-17-9-30-25-32-45-6-1-10-6-10-12V74c0-6 4-11 10-12v-6a56 56 0 11112 0v6c6 1 10 6 10 12v14c0 6-4 11-10 12-2 20-15 36-32 45z"/><circle style={{ transform: interpBg }} r="120" cy="120" cx="120" id="a"/></defs><g fill-rule="evenodd" fill="none"><g transform="translate(12 40)"><mask className='roundTheBck' fill="#fff" id="b"><use xlinkHref="#a"/></mask>
        <g id='bck' fill="#65C9FF" mask="url(#b)"><path d="M0 0h240v240H0z"/></g></g><mask fill="#fff" id="d"><use xlinkHref="#c"/></mask><g mask="url(#d)"><g transform="translate(32 36)"><mask fill="#fff" id="f"><use xlinkHref="#e"/></mask>
        <a.g id='face' fill="#EDB98A" mask="url(#f)"><path d="M-32 0h264v244H-32z"/></a.g><path mask="url(#f)" fill="#000" fill-opacity=".1" d="M156 79v23a56 56 0 11-112 0V79v15a56 56 0 10112 0V79z"/></g><g transform="translate(0 170)"><defs><path id="g" d="M171 30c35 5 61 35 61 71v9H32v-9c0-36 26-66 61-71 1 5 3 10 7 14l29 26h6l29-26a24 24 0 007-14z"/></defs><mask fill="#fff" id="h"><use xlinkHref="#g"/></mask><use xlinkHref="#g" fill="#E6E6E6"/>
        <g id='shirt' fill="#3C4F5C" mask="url(#h)"><path d="M0 0h264v110H0z"/></g></g><g fill="#000"><path d="M118 149c0 8 6 14 14 14s14-6 14-14" fill-opacity=".7"/><path d="M120 130c0 4 5 8 12 8s12-4 12-8" fill-opacity=".2"/><a.g transform={interpEye} fill-opacity=".6" ><circle r="6" cy="22" cx="30"/><circle r="6" cy="22" cx="82"/></a.g><g fill-opacity=".6"><path d="M103 88c-6 0-16 5-15 10v1c3-3 22-6 29-5l1-1c-3-4-10-5-15-5M162 88c6 0 16 5 15 10v1c-3-3-22-6-29-5l-1-1c3-4 10-5 15-5"/></g></g><defs><path id="i" d="M0 0h264v280H0z"/><path id="m" d="M180 40l-9-8-2-1-2-2v-1c0-2 3-6 1-7l-4 1-6 2c1-2 3-6 0-5l-8 4c1-1 4-6 1-6l-5 2-9 3c-11 2-25 1-35 6-8 4-16 10-20 18-5 7-6 16-7 24l-1 19c0 2 1 12 4 9l1-9 3-12c2-6 5-14 10-18l10-10 3-1h39l10-1h7l4 5 8 7c6 4 9 10 11 17l3 21c0 1 1 3 3 1v-3l1-13c0-13-1-32-11-42z"/></defs><mask fill="#fff" id="j"><use xlinkHref="#i"/></mask><g mask="url(#j)"><g transform="translate(-1)">
        <g transform="translate(49 72)"><defs><path id="k" d="M101 98c-2 2-5 3-8 3-1 0-3-5-9-5s-8 5-9 5c-3 0-6-1-8-3-5-4-9-10-7-17 2-3 4-7 7-8l13-1 4-1 4 1 13 1c3 1 5 5 7 8 2 7-2 13-7 17m39-72c-3 8-2 19-3 28 0 7-2 18-8 22-3 3-9 7-13 5-3 0-4-9-8-12s-9-5-15-5c-2 0-7 0-9 2-2-2-7-2-9-2-6 0-11 2-15 5s-5 12-8 12c-4 2-10-2-13-5-6-4-8-15-8-22-1-9 0-20-3-28-2 0-1 16-1 16v20c0 16 10 39 31 47 5 3 17 6 26 6s21-3 26-5c21-9 31-32 31-48V42s1-16-1-16"/></defs><mask fill="#fff" id="l"><use xlinkHref="#k"/></mask>
        <g id='beard' fill="#2C1B18" mask="url(#l)"><path d="M-32 0h264v244H-32z"/></g></g><mask fill="#fff" id="n"><use xlinkHref="#m"/></mask><use xlinkHref="#m" fill="#fff"/>
        <g id="hair" fill="#2C1B18" mask="url(#n)"><path d="M0 0h264v280H0z"/></g><g transform="translate(62 85)"><defs><filter id="o" filterUnits="objectBoundingBox" height="109.8%" width="101.5%" y="-2.4%" x="-.8%"><feOffset result="shadowOffsetOuter1" in="SourceAlpha" dy="2"/><feColorMatrix result="shadowMatrixOuter1" in="shadowOffsetOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        {/* <g id='glass' fill="#252C2F" transform="translate(6 7)" filter="url(#o)" fill-rule="nonzero"><path d="M34 41h-3C17 41 9 33 9 21 9 10 11 0 33 0h2c22 0 24 10 24 21 0 12-10 20-25 20zM32 6c-19 0-19 7-19 16 0 7 3 15 18 15h3c12 0 21-6 21-15S55 6 36 6h-4zM96 41h-3c-14 0-22-8-22-20 0-11 2-21 24-21h2c22 0 24 10 24 21 0 12-10 20-25 20zM94 6c-19 0-19 7-19 16 0 7 3 15 18 15h3c12 0 21-6 21-15s0-16-19-16h-4z"/><path d="M3 6c1-1 8-6 30-6 17 0 21 2 27 5l5 1 5-1c6-3 13-5 28-5 21 0 28 5 29 6 2 0 3 1 3 3v3c0 1-1 2-3 2 0 0-7 0-7 3s-2-4-2-5V9c-3-2-10-4-20-4-12 0-18 2-23 4v2l-2 5-3-1h-8-2l-2 2-3-6V9c-4-2-8-4-22-4-11 0-18 2-21 4v3c0 1-3 8-3 5s-6-3-6-3c-2 0-3-1-3-2V9c0-2 1-3 3-3z"/></g> */}
        </g></g></g></g></g></a.svg>
    </AvatarContainer>
     


    <>
  </>,

  </HomeContainer>
  )
}

export default About;
