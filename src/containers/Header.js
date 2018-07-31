import React from 'react';

const Header = () => (
  <header>
    <nav className="wrapper">
      <ul>
        <li className="selected"><a href="">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="resume.pdf">Resume</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
