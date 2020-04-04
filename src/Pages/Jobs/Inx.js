import React from 'react'
import styled from '@emotion/styled'
import IsometricGrid, { Cell } from 'react-isometric-grid';
import dynamics from 'dynamics.js';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const PageContainer = styled.div`
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwM3B4IiBoZWlnaHQ9IjkwMHB4IiB2aWV3Qm94PSIwIDAgMTAwMyA5MDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5QYXRoIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iRGVzaWduIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjE1Ij4KICAgICAgICA8ZyBpZD0iTmF2LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDQuMDAwMDAwLCAwLjAwMDAwMCkiIHN0cm9rZT0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjM2LDAgQzEyMzAuMzAzNzQsMjA5LjU0ODI3MiAxMDkwLjIyNzY5LDMxNC4zMjI0MDcgODE1Ljc3MTg1NCwzMTQuMzIyNDA3IEM1NTUuNTA3NjE0LDMxNC4zMjI0MDcgNDk3Ljk4MjcxOSw0NTMuNjM1OTk1IDY0My4xOTcxNyw3MzIuMjYzMTcgTDY0My4xOTcxNjksNzMyLjI2MzE3MSBDNjUwLjM0NDIzMSw3NDUuOTc2NDQ3IDY0NS4wMjEyNjMsNzYyLjg4NzA5MiA2MzEuMzA3OTg4LDc3MC4wMzQxNTQgQzYyNi41NzUzNDMsNzcyLjUwMDcwNiA2MjEuMjM2MzYsNzczLjU2MzM1NiA2MTUuOTE5OTQ3LDc3My4wOTY5MjggQzM5Ni4xNTQxNSw3NTMuODE2MDkyIDI1OS4xODA4MzUsODE2LjExNzExNiAyMDUsOTYwIiBpZD0iUGF0aC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MjAuNTAwMDAwLCA0ODAuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC03MjAuNTAwMDAwLCAtNDgwLjAwMDAwMCkgIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=) center center fixed,linear-gradient(45deg,#6f22b9,#3a3d98);
  background-size: cover;
  margin-top: -10px;
  height: 100vh;
  width: 100vw;
  overflow:auto;
`;

const JobInfo = styled.div`
  padding: 15px 200px;
  background: white;
  height: 110px;
  line-height: 39px;
  font-weight: 900;
  font-size: 23px;
`;

const JobDescription = styled.div`
      padding: 15px 200px;
    height: 160px;
    font-family: 'Futura PT','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    font-weight: normal;
    font-kerning: normal;
    font-feature-settings: "kern","liga","clig","calt";
    -webkit-letter-spacing: -0.035em;
    -moz-letter-spacing: -0.035em;
    -ms-letter-spacing: -0.035em;
    letter-spacing: -0.035em;
    -webkit-font-smoothing: antialiased;
    color: #000000;
    box-sizing: border-box;
    position: relative;
    -webkit-column-count: 2;
    column-count: 2;
    -webkit-column-gap: 3rem;
    column-gap: 3rem;
    line-height: 27px;
`;

const UL = styled.ul`
      margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
`;

const JobTools = styled.div`
    background: white;
    height: 100%;
    overflow: hidden;
`;

const HeaderContainer = styled.div`
  padding: 75px 200px;
`;

const Inx = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const content = [
    { title: 'Crypto Currencies Exchange', image: '/INX.png'},
    { title: 'KYC Solution', image: '/INX3.png'},
    { title: 'Reports', image: '/INX4.png'}
  ];

  return (
    <PageContainer>
    <HeaderContainer>
    <Slider infinite autoplay={3000}>
      {content.map((item, index) => (
        <div
          key={index}
          style={{ background: `url('${item.image}') no-repeat center center`,   
          maxWidth: '1528px',
          maxHeight: '1002px',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%' }}
        >
          <div className="center">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Slider>
    </HeaderContainer>
    <JobInfo>
      <p1 style={{fontSize: '36px'}}>INX Limited</p1>
      <br/>
      <p3>Full Stack Developer, Jan 2020 to Today</p3>
    </JobInfo>
    <JobDescription>
    <UL>
      <li>Responsible for the analysis, design and programming of the mobile application in Objective C for iOS</li>
      <li>In charge of the development of the application for Red5 in Java</li>
      <li>Construction of the bot for optimization of video, audio and images of the platform</li>
      <li>Creation of multiple APIs RESTful PHP</li>
      <li>In charge of the graphical interface of vlooping.com</li>
    </UL>
    </JobDescription>
    <JobTools>
      <JobInfo>
    Tools used
    <br/>
    The list of tools used here corresponds to the Languages, Frameworks, Libraries or Apps that I used in each of the roles performed.
    </JobInfo>
    <IsometricGrid
      shadow
      transform="rotateX(65deg) rotateZ(-25deg)"
      stackItemsAnimation={{
        properties: function(pos) {
          return {
            translateZ: (pos + 1) * 30,
            rotateZ: getRandomInt(-4, 4),
          };
        },
        options: function(pos, itemstotal) {
          return {
            type: dynamics.spring,
            duration: 800,
            points: [
              { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
              { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
            ],
            delay: (itemstotal - pos - 1) * 40,
          };
        },
      }}
      style={{ 
        height: '700px',
    }}
    >
      <Cell
      title="React"
        layers={[
          'https://christianibarguen.com/static/7bc286d7d891a1ce709592e7219361d7/c0bbd/react.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="Redux"
        layers={[
          'https://christianibarguen.com/static/d400f061769c6643b7b824ae74620cf5/c0bbd/redux.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="Socket.io"
        layers={[
          'https://christianibarguen.com/static/8dab92c9c5bb92a4b63aa83e4a928f92/c0bbd/socket-io.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="html5"
        layers={[
          'https://christianibarguen.com/static/d3fa1f96cf67ef88f3a688cef8917a19/c0bbd/html5.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="css3"
        layers={[
          'https://christianibarguen.com/static/b791dc60f67d8d5797e4331be32174b5/c0bbd/css3.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="node"
        layers={[
          'https://christianibarguen.com/static/3da133eb73395e06173c47fd90a93b2d/c0bbd/nodejs.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="rest"
        layers={[
          'https://christianibarguen.com/static/fbc4dc69e0251695e79eb0b8ffbe604e/c0bbd/restful.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="mocha"
        layers={[
          'https://christianibarguen.com/static/97501fa8bda354982d09d6170ccf0b2f/c0bbd/mocha.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="chai"
        layers={[
          'https://christianibarguen.com/static/d49c0f2b33a8be79bf1c1d12be310a70/c0bbd/chai.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="mongodb"
        layers={[
          ' https://christianibarguen.com/static/ac78fbc2b9d061d2e5d515fbc2d03aa0/c0bbd/mongodb.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="git"
        layers={[
          'https://christianibarguen.com/static/c78f33195d7e6e9b89bd93f219fc2c01/c0bbd/git.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="aws ec2"
        layers={[
          'https://christianibarguen.com/static/029ae654975d9cde866dd6089a9095ae/c0bbd/aws-ec2.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="rabbit mq"
        layers={[
          'https://christianibarguen.com/static/3879e0017f48964465fe367c57363fbc/c0bbd/rabbitmq.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
    </IsometricGrid>
    </JobTools>
  </PageContainer>
  )
}

export default Inx


