import React from 'react'
import styled from '@emotion/styled'
import 'normalize.css';
import IsometricGrid, { Cell } from 'react-isometric-grid';
import dynamics from 'dynamics.js';
import useWindowScroll from '@react-hook/window-scroll'

const PageContainer = styled.div`
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwM3B4IiBoZWlnaHQ9IjkwMHB4IiB2aWV3Qm94PSIwIDAgMTAwMyA5MDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5QYXRoIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iRGVzaWduIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjE1Ij4KICAgICAgICA8ZyBpZD0iTmF2LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDQuMDAwMDAwLCAwLjAwMDAwMCkiIHN0cm9rZT0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjM2LDAgQzEyMzAuMzAzNzQsMjA5LjU0ODI3MiAxMDkwLjIyNzY5LDMxNC4zMjI0MDcgODE1Ljc3MTg1NCwzMTQuMzIyNDA3IEM1NTUuNTA3NjE0LDMxNC4zMjI0MDcgNDk3Ljk4MjcxOSw0NTMuNjM1OTk1IDY0My4xOTcxNyw3MzIuMjYzMTcgTDY0My4xOTcxNjksNzMyLjI2MzE3MSBDNjUwLjM0NDIzMSw3NDUuOTc2NDQ3IDY0NS4wMjEyNjMsNzYyLjg4NzA5MiA2MzEuMzA3OTg4LDc3MC4wMzQxNTQgQzYyNi41NzUzNDMsNzcyLjUwMDcwNiA2MjEuMjM2MzYsNzczLjU2MzM1NiA2MTUuOTE5OTQ3LDc3My4wOTY5MjggQzM5Ni4xNTQxNSw3NTMuODE2MDkyIDI1OS4xODA4MzUsODE2LjExNzExNiAyMDUsOTYwIiBpZD0iUGF0aC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MjAuNTAwMDAwLCA0ODAuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC03MjAuNTAwMDAwLCAtNDgwLjAwMDAwMCkgIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=) center center fixed,linear-gradient(45deg,#9d316e,#de2d3e);
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const SkillsContainer = styled.div`
    height: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    top: calc(100vh - 800px);
    overflow: auto;
`;

const TitleContainer = styled.h2`
  font-family: 'Source Sans Pro';
  font-size: 3rem;
  line-height: 1.25;
  margin: 0px 0px 1rem;
`;
const SubTitile = styled.p`
  font-family: 'Source Sans Pro';
  font-size: 16px;
  line-height: 1.75;
  font-weight: 700;
  max-width: 40%;
  padding: 0px;
  color: #fff;
`;

const HeaderContainer = styled.div`
  padding: 75px 200px;
`;


const Skills = () => {

  const scrollY = useWindowScroll(60 /*fps*/)

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  return (
    <PageContainer>
    <HeaderContainer>
      <TitleContainer>
        Skills
      </TitleContainer>
      <SubTitile>
      These are the skills that I have acquired through my years of experience working as a software developer, the order is based on the ones I like most and or I have used.
      </SubTitile>
    </HeaderContainer>
    <SkillsContainer>
      <IsometricGrid
      shadow
      // transform={`rotateX(45deg) rotateZ(45deg)  translateY(${scrollY})`}
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
        // height: '800px',
        // width: '900px',
        // transformStyle: 'preserve-3d',
        // transform: `perspective(4868.8px) rotateX(31deg) rotateZ(-361deg) translateY(${scrollY})`,
        height: '800px',
        width: '900px',
        transformStyle: 'preserve-3d',
        transform: `perspective(3000px) scale3d(0.8, 0.8, 3) rotateY(-28deg) rotateZ(41deg) rotateX(48deg)`,
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
      title="js"
        layers={[
          '/js.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="jQuery"
        layers={[
          '/jquery.png',
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
      title="python"
        layers={[
          '/python.png',
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
      title="express"
        layers={[
          'https://christianibarguen.com/static/88d85eaca76339ea6b33382c1c87f12c/c0bbd/expressjs.png',
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
      title="mysql"
        layers={[
          'https://christianibarguen.com/static/29fe400f21fff1a034e062ed3e73a5fe/c0bbd/mysql.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="jquery"
        layers={[
          'https://christianibarguen.com/static/dda14781db15c1fbf23ed54d7a35b4f2/c0bbd/jquery.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
        title="backbone"
        layers={[
          '/backbone.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
        title="java"
        layers={[
          'https://christianibarguen.com/static/3ad043bf550e62d7bb61bfc304730c00/c0bbd/java.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="bootstrap"
        layers={[
          'https://christianibarguen.com/static/407768cdd2bde4915058b9827c5e85a3/c0bbd/bootstrap.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="puppeteer"
        layers={[
          '/puppeteer.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="photoshop"
        layers={[
          '/photoshop.png',
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
      <Cell
      title="linux"
        layers={[
          'linux.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="selenium"
        layers={[
          '/selenium.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="facebook api"
        layers={[
          'https://christianibarguen.com/static/2dbbf1f85319f8b756e6504e585fc63e/c0bbd/facebook-api.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="google analytics"
        layers={[
          ' https://christianibarguen.com/static/837979393477302a9d9abd657f7e942e/c0bbd/google-analytics.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="C#"
        layers={[
          '/asp.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="MATHLAB"
        layers={[
          '/mathlab.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
    </IsometricGrid>
  </SkillsContainer>
  </PageContainer>
  )
}

export default Skills
