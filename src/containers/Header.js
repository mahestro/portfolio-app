import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="wrapper">
      <ul>
        <li className="selected"><Link to="/">Work</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><a href="resume.pdf" rel="noopener noreferrer" target="_blank">Resume</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
