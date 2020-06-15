import React from 'react';
import Icon from '../components/Icon';
import imgPersonalPhoto from '../i/luis-millan-photo.jpg';
import imgPersonalPhoto2x from '../i/luis-millan-photo@2x.jpg';

const Footer = () => (
  <footer>
    <a id="about"> </a>

    <div className="wrapper">
      <div className="footer__photo">
        <div className="footer__photo__mask">
          <img
            src={imgPersonalPhoto}
            srcSet={`${imgPersonalPhoto2x} 2x`}
            alt="Luis Millan" />
        </div>
      </div>
      <div className="footer__info">
        <h4 className="color--white">Luis Millán</h4>
        <p>UX designer and project manager, specialising in interaction design, visual design and frontend development for digital experiences.</p>
      </div>
      <div className="footer__links">
        <ul>
          <li>
              <a className="link" href="https://www.linkedin.com/in/mahestro" rel="noopener noreferrer" target="_blank">
                <Icon className="icon icon--small" id="lnkdin" />
                Linkedin
              </a>
          </li>
          <li>
              <a className="link" href="https://www.topcoder.com/members/mahestro" rel="noopener noreferrer" target="_blank">
                <Icon className="icon icon--small" id="topcoder" />
                Topcoder
              </a>
          </li>
          <li>
              <a className="link" href="https://www.github.com/mahestro" rel="noopener noreferrer" target="_blank">
                <Icon className="icon icon--small" id="github" />
                Github
              </a>
          </li>
          <li>
              <a className="link" href="https://www.instagram.com/mahestro" rel="noopener noreferrer" target="_blank">
                <Icon className="icon icon--small" id="instgram" />
                Instagram
              </a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <p className="typography-caption color--grey">
          Designed and coded by me.<br />
          © Copyright 2020 Luis Millán.<br />
          All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
