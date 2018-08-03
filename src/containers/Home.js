import React, { Component } from 'react';
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
import Work from '../components/Work';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="work wrapper">
          <Work
            title="Dejavuphoto"
            tags="Branding • UX • UI • Partner"
            description="Photography print self-service for users who attend a wide variety of photo-centric events and want to have those memories back once they get back home"
            link="dejavu"
            img={imgDejavu}
            img2x={imgDejavu2x}
            orientation={orientations.CARD_ORIENTATION_RIGHT}
            customCoverClass="dejavu" />

          <Work
            title="NASA Intake Log Application"
            tags="Research • iOS Development"
            description="Food Intake Tracker System (iPad app), designed and developed through crowdsourcing in Topcoder, to collect data from astronauts food records"
            link="nasa"
            img={imgNasa}
            img2x={imgNasa2x}
            orientation={orientations.CARD_ORIENTATION_LEFT}
            customCoverClass="nasa" />

            <Work
            title="News Franchise"
            tags="Branding • UI • CMS • Entrepreneurship"
            description="Engaging community-based news website, mainly targeted to users from my home town to create acknowledgement of the culture and positive aspects to share about the city"
            link="lomejordelapascua"
            img={imgLomejor}
            img2x={imgLomejor2x}
            orientation={orientations.CARD_ORIENTATION_RIGHT}
            customCoverClass="lmp" />

          <Work
            title="Household Service Marketplace"
            tags="UI • Frontend"
            description="Service providers connect with customers through an online tool/website, managing transactions, reviews and content"
            link="squidjob"
            img={imgSquidjob}
            img2x={imgSquidjob2x}
            orientation={orientations.CARD_ORIENTATION_LEFT}
            customCoverClass="squidjob" />

            <Work
            title="UI Concepts"
            tags="UI • UX"
            description="UI Design and exploration for design competitions in Topcoder (wins), clients and side fun projects"
            link="ui-concepts"
            img={imgConcepts}
            img2x={imgConcepts2x}
            orientation={orientations.CARD_ORIENTATION_RIGHT}
            customCoverClass="concepts" />
        </section>
      </div>
    );
  }
}

export default Home;
