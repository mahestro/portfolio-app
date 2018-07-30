import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="wrapper">
            <ul>
              <li className="selected"><a href="">Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="resume.pdf">Resume</a></li>
            </ul>
          </nav>
        </header>

        <section className="work wrapper">
          <article className="work__item">
            <div className="work__item__photo">
              <img></img>
            </div>
            <div className="work__item__info">
              <div className="work__item__info__wrapper">
                <h5 className="typography-h5">Dejavuphoto</h5>
                <p className="color--grey">Branding • UX • UI • Partner</p>
                <p>Photography print self-service for users who attend a wide variety of photo-centric events and want to have those memories back once they get back home</p>
                <div className="work__item__info__button-container">
                  <a className="link link--arrowed" href="">View Case<i className="icon icon--small"></i></a>
                </div>
              </div>
            </div>
          </article>
        </section>

        <footer>
          <div className="wrapper">
            <div className="footer__photo">
              <picture></picture>
            </div>
            <div className="footer__info">
              <h4 className="typography-h4 typography--white">Luis Millán</h4>
              <p className="color--white">UX designer and project manager, specialising in interaction design, visual design and frontend development for digital experiences.</p>
            </div>
            <div className="footer__links">
              <ul>
                <li>
                    <a href="https://www.linkedin.com/luismillan">
                      <i className="icon icon--small"></i>
                      Linkedin
                    </a>
                </li>
                <li>
                    <a href="https://www.topcoder.com/members/mahestro">
                      <i className="icon icon--small"></i>
                      Topcoder
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/mahestro">
                      <i className="icon icon--small"></i>
                      Github
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mahestro">
                      <i className="icon icon--small"></i>
                      Instagram
                    </a>
                </li>
              </ul>
            </div>
            <div className="footer__copyright">
              <p className="typography-caption color--grey">Designed and coded by me. © Copyright 2018 Luis Millán. All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
