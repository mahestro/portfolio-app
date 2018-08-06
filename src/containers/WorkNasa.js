import React from 'react';
import Hero from '../components/Hero';
import Image from '../components/Image';
import Outcome from '../components/Outcome';
import imgCover from '../i/nasa-cover.png';
import imgCover2x from '../i/nasa-cover@2x.png';
import imgVisual1 from '../i/nasa-visual-1.jpg';
import imgVisual12x from '../i/nasa-visual-1@2x.jpg';
import imgVisual2 from '../i/nasa-visual-2.jpg';
import imgVisual22x from '../i/nasa-visual-2@2x.jpg';
import imgVisual3 from '../i/nasa-visual-3.jpg';
import imgVisual32x from '../i/nasa-visual-3@2x.jpg';
import imgVisual4 from '../i/nasa-visual-4.jpg';
import imgVisual42x from '../i/nasa-visual-4@2x.jpg';


const WorkNasa = () => (
  <section className="work-details">
    <Hero
      title="NASA ISS Intake Tracker App"
      brief="Food Intake Tracker System (iPad app), designed and developed through crowdsourcing in Topcoder, to collect data from astronauts food intake records and patterns"
      img={imgCover}
      img2x={imgCover2x}
      customClass="work-details__header--nasa" />

    <div className="work-details__content">
      <div className="work-details__wrapper">
        <h4>Project Overview</h4>
        <p>
        NASA already had an existing intake tracking system for astronauts living in the International Space Station (ISS) but it wasn’t working as expected. They needed astronauts to care about the data they were entering with the goal of sending this data back to planet earth, study it and fight back the known consequences of living under a zero gravity environment.</p>

        <p>Topcoder, a known software development company based on crowdsourcing, entered into scene to contribute with the development of an iPad application that was engaging, enjoyable and secure at the moment of collecting such an important data for very busy astronauts.</p>

        <p><strong>Timeline: </strong><br />
        6 Months (2013)</p>

        <p><strong>Role: </strong><br />
        A large amount of competitions were ran through the crowd (worldwide design/development community) to develop this application. <strong>I worked on this project as a competitor, research and system design</strong>. I participated in three competitions related to system architecture design, won all three of them, generating documentation and dev-ready objective-c code to use for the barcode, voice and facial recognition systems.</p>

        <p><strong>Reference: </strong></p>

        <ul className="reference-links">
          <li><a href="https://www.topcoder.com/challenges/30032430/?type=design&tab=winners" rel="noopener noreferrer" target="_blank">Barcode Recognition System Competition</a></li>
          <li><a href="https://www.topcoder.com/challenges/30032403/?type=design&tab=winners" rel="noopener noreferrer" target="_blank">Voice Recognition System Competition</a></li>
          <li><a href="https://www.topcoder.com/challenges/30032432/?type=design&tab=winners" rel="noopener noreferrer" target="_blank">Facial-Object Recognition System Competition</a></li>
          <li><a href="https://www.nasa.gov/feature/crowdsourced-app-plots-food-and-health-for-space-station-astronauts" rel="noopener noreferrer" target="_blank">Crowdsourced App Plots Food and Health for Space Station Astronauts</a></li>
          <li><a href="https://www.forbes.com/sites/techonomy/2013/02/26/nasa-asks-the-crowd-to-help-track-what-astronauts-eat/#207a85744780" rel="noopener noreferrer" target="_blank">NASA Asks The 'Crowd' To Help Track What Astronauts Eat</a></li>
        </ul>

        <div className="work-details__twocols">
          <div className="work-details__twocols__left">
            <h5>The Challenge</h5>
            <p>Multiple unique challenges were present at the moment of working on this project. First of all, the environment: noise, lack of light, micro gravity (tablet wouldn’t detect its orientation or up/down face position, food could be floating, among others). The origin of the food affected the way data was going to be processed, coming from the US and Russia, different barcodes and nomenclature.</p>
          </div>

          <div className="work-details__twocols__right">
            <h5>Contribution</h5>
            <ul className="bullets">
              <li><span>Research</span></li>
              <li><span>Core System Libraries</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="work-details__content">
      <div className="work-details__wrapper">
        <h4>Solution</h4>
        <p>After a series of crowdsourcing competitions, the community members created an iPad app that helps astronauts providing accurate and quick method for tracking their dietary intake, while also tracking important nutrient data. Food can be logged and tracked through image recognition, voice, barcode scanning, as well as manual entry.</p>
        <p>
        In my personal experience while researching and designing the core systems of the application, I tested several open-source and private solutions, providing a documented proof and features comparison in order to select the frameworks that best suits the needs of the project. I decided to select flexible frameworks as baseline while modifying them to fit the overall system architecture needs. I made sure to deliver proper documentation and ready-to-use components to developers.</p>
      </div>
    </div>

    <div className="work-details__visual">
      <div className="work-details__wrapper">
        <div className="work-details__visual__title">
          <p className="typography-lead">Final Product</p>
        </div>
      </div>

      <div className="work-details__visual__shot">
        <Image
          img={imgVisual1}
          img2x={imgVisual12x} />
        <Image
          img={imgVisual2}
          img2x={imgVisual22x} />
      </div>
      <div className="work-details__visual__shot">
        <Image
          img={imgVisual3}
          img2x={imgVisual32x} />
        <Image
          img={imgVisual4}
          img2x={imgVisual42x} />
      </div>
   </div>

    <div className="work-details__content">
      <div className="work-details__wrapper">
        <h4>Outcome</h4>
      </div>

      <div className="work-details__outcome-container">
        <Outcome
          id="face"
          title="Object recognition library" />

        <Outcome
          id="microphone"
          title="Voice recognition library" />

        <Outcome
          id="barcode"
          title="Barcode scanning library" />
      </div>
    </div>
  </section>
);

export default WorkNasa;
