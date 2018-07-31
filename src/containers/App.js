import React, { Component } from 'react';
import './App.css';
import * as orientations from '../constants/system';
import imgDejavu from '../i/dejavu-work-list.png';
import imgDejavu2x from '../i/dejavu-work-list@2x.png';
import imgNasa from '../i/logo-nasa.svg';
import imgNasa2x from '../i/logo-nasa.svg';
import imgLomejor from '../i/lomejor-work-list.png';
import imgLomejor2x from '../i/lomejor-work-list@2x.png';
import imgSquidjob from '../i/squidjob-work-list.png';
import imgSquidjob2x from '../i/squidjob-work-list@2x.png';
import imgConcepts from '../i/concepts-work-list.png';
import imgConcepts2x from '../i/concepts-work-list@2x.png';
import Icon from '../components/Icon';
import Work from '../components/Work';

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
          <Work
            title="Dejavuphoto"
            tags="Branding • UX • UI • Partner"
            description="Photography print self-service for users who attend a wide variety of photo-centric events and want to have those memories back once they get back home"
            link=""
            img={imgDejavu}
            img2x={imgDejavu2x}
            orientation={orientations.CARD_ORIENTATION_RIGHT}
            customCoverClass="dejavu" />

          <Work
            title="NASA Intake Log Application"
            tags="Research • iOS Development"
            description="Food Intake Tracker System (iPad app), designed and developed through crowdsourcing in Topcoder, to collect data from astronauts food records"
            link=""
            img={imgNasa}
            img2x={imgNasa2x}
            orientation={orientations.CARD_ORIENTATION_LEFT}
            customCoverClass="nasa" />

            <Work
            title="News Franchise"
            tags="Branding • UI • CMS • Entrepreneurship"
            description="Engaging community-based news website, mainly targeted to users from my home town to create acknowledgement of the culture and positive aspects to share about the city"
            link=""
            img={imgLomejor}
            img2x={imgLomejor2x}
            orientation={orientations.CARD_ORIENTATION_RIGHT}
            customCoverClass="lmp" />

          <Work
            title="Household Service Marketplace"
            tags="UI • Frontend"
            description="Service providers connect with customers through an online tool/website, managing transactions, reviews and content"
            link=""
            img={imgSquidjob}
            img2x={imgSquidjob2x}
            orientation={orientations.CARD_ORIENTATION_LEFT}
            customCoverClass="squidjob" />

            <Work
            title="UI Concepts"
            tags="UI • UX"
            description="UI Design and exploration for design competitions in Topcoder (wins), clients and side fun projects"
            link=""
            img={imgConcepts}
            img2x={imgConcepts2x}
            orientation={orientations.CARD_ORIENTATION_RIGHT}
            customCoverClass="concepts" />
        </section>

        <footer>
          <div className="wrapper">
            <div className="footer__photo">
              <picture></picture>
            </div>
            <div className="footer__info">
              <h4 className="color--white">Luis Millán</h4>
              <p className="color--white">UX designer and project manager, specialising in interaction design, visual design and frontend development for digital experiences.</p>
            </div>
            <div className="footer__links">
              <ul>
                <li>
                    <a href="https://www.linkedin.com/luismillan">
                      <Icon className="icon icon--small" id="lnkdin" />
                      Linkedin
                    </a>
                </li>
                <li>
                    <a href="https://www.topcoder.com/members/mahestro">
                      <Icon className="icon icon--small" id="topcoder" />
                      Topcoder
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/mahestro">
                      <Icon className="icon icon--small" id="github" />
                      Github
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mahestro">
                      <Icon className="icon icon--small" id="instagram" />
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
