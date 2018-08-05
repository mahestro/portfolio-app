import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../constants/routes';

const Header = () => (
  <header>
    <nav className="wrapper">
      <ul>
        <li className="selected"><Link to={Routes.HOME}>Work</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="resume.pdf" rel="noopener noreferrer" target="_blank">Resume</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
