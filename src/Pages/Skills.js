import React from 'react'
import styled from '@emotion/styled'
import 'normalize.css';
import IsometricGrid, { Cell } from 'react-isometric-grid';
import dynamics from 'dynamics.js';
import useWindowScroll from '@react-hook/window-scroll'
import { useState } from 'react';

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
    overflow: ${props => props.overflow ? props.overflow : 'auto'};
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
const [overflow, setOverflow] = useState('hidden')
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
      These are the skills that I have acquired through my years of experience working as a software developer, the order is based on the ones I like most or I have used.
      </SubTitile>
    </HeaderContainer>
    <SkillsContainer overflow={overflow}>
      <IsometricGrid
      onGridLoaded={() => {
        setOverflow('auto');
      }}
      shadow
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
        height: '800px',
        width: '900px',
        transformStyle: 'preserve-3d',
        transform: `perspective(5100px) scale3d(0.8, 0.8, 3) rotateY(-28deg) rotateZ(41deg) rotateX(48deg)`,
    }}
    >
      <Cell
      title="React"
        layers={[
          '/react.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="Redux"
        layers={[
          '/redux.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="Socket.io"
        layers={[
          '/socket-io.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="html5"
        layers={[
          '/html5.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="css3"
        layers={[
          '/css3.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="js"
        layers={[
          '/js1.png',
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
          '/nodejs.png',
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
          '/restful.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="express"
        layers={[
          '/expressjs.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="mocha"
        layers={[
          '/mocha.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="chai"
        layers={[
          '/chai.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="mongodb"
        layers={[
          '/mongodb.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
        ]}
      />
      <Cell
      title="git"
        layers={[
          '/git.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="mysql"
        layers={[
          '/mysql.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="jquery"
        layers={[
          '/jquery.png',
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
          '/java.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="bootstrap"
        layers={[
          '/bootstrap.png',
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
          '/aws-ec2.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="rabbit mq"
        layers={[
          '/rabbitmq.png',
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
          '/facebook-api.png',
          '#9972fc',
          '#c322a3',
          '#9eb5c2',
          
        ]}
      />
      <Cell
      title="google analytics"
        layers={[
          '/google-analytics.png',
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
