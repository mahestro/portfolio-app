import React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../constants/routes';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li className="selected"><Link to={Routes.HOME}>Work</Link></li>
        <li><a href="#about">About</a></li>
        <li><Link to="/resume.pdf" rel="noopener noreferrer" target="_blank">Resume</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
