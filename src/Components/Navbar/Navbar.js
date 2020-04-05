import React from 'react';
import styled from '@emotion/styled'

const Navbar = () => {


const NavBar = styled.div`
&{
  #nav_bar ul {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: block;
    padding: 0;
    list-style: none;
    text-align: center;
    margin: 0;
  }
  #nav_bar ul li a {
    padding: 7px 0;
    display: block;
    font-size: 15px;
    line-height: 16px;
    color: #4d4d4e;
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #nav_bar ul li a:hover {
      color: #08fdd8;
  }

  ul {
    list-style-type: none;
  }

  #nav_bar {
    background: #181818;
    width: 75px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    min-height: 500px;
  }
  .logo {
    background: #070707;
    display: block;
    padding: 8px 0;
  }
  .logo img {
      display: block;
      margin: 8px auto;
      width: 24px;
      height: auto;
  }
  img {
    border: 0;
    max-width: 100%;
  }
  #nav_bar nav {
    display: block;
    text-align: center;
    position: absolute;
    height: 210px;
    top: 50%;
    margin-top: -120px;
    width: 100%;
  }
  #nav_bar nav a.active, #nav_bar nav a:hover {
    color: #08fdd8;
  }
  #nav_bar nav a {
    font-size: 22px;
    color: #4d4d4e;
    display: block;
    line-height: 51px;
    height: 51px;
    position: relative;
    text-decoration: none;
  }
  #nav_bar nav a i {
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
  }
  [class^=icon-], [class*=" icon-"] {
    /* font-family: 'icomoon' !important; */
    font-family: 'Material Icons' !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-hom:before {
        content: 'home';
  }
  #nav_bar nav a:first-child:after {
    content: 'HOME';
    font-family: 'Source Sans Pro';

  }
  #nav_bar nav a:after {
    content: '';
    font-size: 9px;
    letter-spacing: 2px;
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    text-align: center;
    opacity: 0;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
  }
  .icon-prof:before {
    content: "assignment_ind";
  }
  #nav_bar nav a:first-child+a:after {
    content: 'ABOUT';
    font-family: 'Source Sans Pro';
  }
  .icon-gear:before {
    content: "build";
  }
  #nav_bar nav a:first-child+a+a:after {
      content: 'SKILLS';
      font-family: 'Source Sans Pro';
  }
  .icon-eye:before {
    content: "visibility";
    font-size: 17px;
  }
  #nav_bar nav a:first-child+a+a+a:after {
    content: 'EPRERIENCE';
    font-family: 'Source Sans Pro';
  }
  .icon-mail:before {
    content: "mail_outline";
    font-size: 18px;
  }
  #nav_bar nav a:first-child+a+a+a+a:after {
    content: 'CONTACT';
    font-family: 'Source Sans Pro';
  }
  #nav_bar nav a.active, #nav_bar nav a:hover {
    color: #08fdd8;
  }
  a:active, a:hover {
    outline: 0;
  }
  #nav_bar nav a:hover:after {
    opacity: 1;
  }
  #nav_bar nav a:hover i {
    opacity: 0;
  }
}
`;


  return (
    <NavBar>
    <div id="nav_bar">
      {/* <a className="logo" rel="index" href="https://jacekjeznach.com"> 
          <img src="https://jacekjeznach.com/wp-content/themes/jj/img/logo.png" alt="Wordpress Developer Logo, Web Developer Logo , Front End Developer Logo"/> 
          <img src="https://jacekjeznach.com/wp-content/themes/jj/img/logo_sub.png" alt="Wordpress Developer, Web Developer , Front End Developer"/> 
      </a> */}
      <nav className="en"> 
      <a rel="index" href="/" className="home-link active">
        <i className="icon-hom"></i>
      </a> 
      <a rel="about" href="/about" className="">
        <i className="icon-prof"></i>
      </a>
      <a rel="skills" href="/skills" className="">
        <i className="icon-gear"></i>
      </a>
      <a rel="gallery" href="/experience" className="">
        <i className="icon-eye"></i>
      </a>
      <a rel="contact" href="/contact" className="">
        <i className="icon-mail"></i>
      </a>
      </nav>
      <ul>
        <li>
          <a href="https://twitter.com/gabaynadav" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://pl.linkedin.com/in/nadav-gabay/" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/nadav.gabay" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
      </ul>
    </div>
    </NavBar>
  )
}

export default Navbar;
