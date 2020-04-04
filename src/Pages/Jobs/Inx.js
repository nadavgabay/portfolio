import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from './scale-out-animation.scss';
import React from 'react'
import styled from '@emotion/styled'

const PageContainer = styled.div`
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwM3B4IiBoZWlnaHQ9IjkwMHB4IiB2aWV3Qm94PSIwIDAgMTAwMyA5MDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5QYXRoIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iRGVzaWduIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjE1Ij4KICAgICAgICA8ZyBpZD0iTmF2LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDQuMDAwMDAwLCAwLjAwMDAwMCkiIHN0cm9rZT0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjM2LDAgQzEyMzAuMzAzNzQsMjA5LjU0ODI3MiAxMDkwLjIyNzY5LDMxNC4zMjI0MDcgODE1Ljc3MTg1NCwzMTQuMzIyNDA3IEM1NTUuNTA3NjE0LDMxNC4zMjI0MDcgNDk3Ljk4MjcxOSw0NTMuNjM1OTk1IDY0My4xOTcxNyw3MzIuMjYzMTcgTDY0My4xOTcxNjksNzMyLjI2MzE3MSBDNjUwLjM0NDIzMSw3NDUuOTc2NDQ3IDY0NS4wMjEyNjMsNzYyLjg4NzA5MiA2MzEuMzA3OTg4LDc3MC4wMzQxNTQgQzYyNi41NzUzNDMsNzcyLjUwMDcwNiA2MjEuMjM2MzYsNzczLjU2MzM1NiA2MTUuOTE5OTQ3LDc3My4wOTY5MjggQzM5Ni4xNTQxNSw3NTMuODE2MDkyIDI1OS4xODA4MzUsODE2LjExNzExNiAyMDUsOTYwIiBpZD0iUGF0aC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MjAuNTAwMDAwLCA0ODAuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC03MjAuNTAwMDAwLCAtNDgwLjAwMDAwMCkgIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=) center center fixed,linear-gradient(45deg,#6f22b9,#3a3d98);
  background-size: cover;
  margin-top: -10px;
  height: 100vh;
  width: 100vw;
`;

const HeaderContainer = styled.div`
  padding: 75px 200px;
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
  line-height: 1.25;
  font-weight: 700;
  max-width: 60%;
  padding: 0px;
  color: #fff;
`;




const Inx = () => {

  return (
    <PageContainer>
    <HeaderContainer>
    <AwesomeSlider cssModule={AwesomeSliderStyles}>
      <div data-src="/path/to/image-0.jpg" />
      <div data-src="/path/to/image-1.jpg" />
      <div data-src="/path/to/image-2.jpg" />
      <div data-src="/path/to/image-3.jpg" />
    </AwesomeSlider>
    </HeaderContainer>
  </PageContainer>
  )
}

export default Inx


