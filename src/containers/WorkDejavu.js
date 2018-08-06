import React from 'react';
import Hero from '../components/Hero';
import Image from '../components/Image';
import Outcome from '../components/Outcome';
import imgCover from '../i/dejavu-cover.png';
import imgCover2x from '../i/dejavu-cover@2x.png';
import imgBranding from '../i/dejavu-branding-logo.jpg';
import imgBranding2x from '../i/dejavu-branding-logo@2x.jpg';
import imgStyleguide1 from '../i/dejavu-styleguide-1.jpg';
import imgStyleguide12x from '../i/dejavu-styleguide-1@2x.jpg';
import imgStyleguide2 from '../i/dejavu-styleguide-2.jpg';
import imgStyleguide22x from '../i/dejavu-styleguide-2@2x.jpg';

const WorkDejavu = () => (
  <section className="work-details">
    <Hero
      title="Dejavuphoto"
      brief="Photography print self-service for users who attend a wide variety of photo-centric events and want to have those memories back once they get back home"
      img={imgCover}
      img2x={imgCover2x}
      customClass="work-details__header--dejavu" />

    <div className="work-details__content">
      <div className="work-details__wrapper">
        <h4>Project Overview</h4>
        <p>
          Dejavuphoto is an in progress startup which serves as a channel for photography printing service for users who visit certain type of events such as sports, vacations and others, wishing to buy the pictures the event administration took of them after they went back home.</p>

          <p><strong>Timeline: </strong><br />
          2 months (2016)</p>

          <p><strong>Role: </strong><br />
          As part of the multi-disciplined team, including data scientists, seasoned PMs and senior developers, <strong>my role was UX designer on this project and partner</strong>. Some of my responsibilities included designing the branding identity (design vision, logo, content strategy), information architecture, prototyping, testing, interaction design and frontend development.</p>

        <div className="work-details__twocols">
          <div className="work-details__twocols__left">
            <h5>The Challenge</h5>
            <p>Approaching potential customers to let them know the event administration had some photos to offer after time had passed. It could seem invasive even though they sign up/agree for this during the event registration. Conversion relies on trustability and clarity for this audience, which made us focus our efforts on providing as much information as we could to make the user feel in a trustable environment.</p>
          </div>

          <div className="work-details__twocols__right">
            <h5>Contribution</h5>
            <ul className="bullets">
              <li><span>User research</span></li>
              <li><span>Wireframes</span></li>
              <li><span>Prototyping</span></li>
              <li><span>Branding identity</span></li>
              <li><span>Style guidelines</span></li>
              <li><span>UI Design</span></li>
              <li><span>Frontend development</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="work-details__content">
      <div className="work-details__wrapper">
        <h4>Solution</h4>
        <p>In order to know our audience and generate accurate user groups, we had to base our user research on qualitative methods, being contextual inquiry and interviewing the main research methods to get to know what we were dealing with; not leaving aside a survey study to collect data about our market segments. </p>
        <p>
        This research allowed the team to determine the path to offer clarity to the users. The most sensitive design decision was to set up as primary principle to the project "give and take and give", meaning that there was sensitive information to display, careful data to collect about the user and a self-explanatory ecosystem that allows the user stay informed at every step of the origin of these photos, from email contact through the purchase landing page.</p>
      </div>
    </div>

    <div className="work-details__visual">
      <div className="work-details__wrapper">
        <div className="work-details__visual__title">
          <p className="typography-lead">Branding/logo exploration</p>
        </div>
      </div>

      <div className="work-details__visual__shot">
        <Image
          img={imgBranding}
          img2x={imgBranding2x} />
      </div>
    </div>

    <div className="work-details__visual">
      <div className="work-details__wrapper">
        <div className="work-details__visual__title">
          <p className="typography-lead">Style Guidelines - UI Development Kit</p>
        </div>
      </div>

      <div className="work-details__visual__shot">
        <Image
          img={imgStyleguide1}
          img2x={imgStyleguide12x} />
        <Image
          img={imgStyleguide2}
          img2x={imgStyleguide22x} />
      </div>
    </div>

    <div className="work-details__content">
      <div className="work-details__wrapper">
        <h4>Outcome</h4>
      </div>

      <div className="work-details__outcome-container">
        <Outcome
          id="shield"
          title="90%"
          brief="Average trustability score after validated prototype" />

        <Outcome
          id="purchase"
          title="218 seg"
          brief="Average required time to complete the lightweight purchase flow" />

        <Outcome
          id="download"
          title="1,3 seg"
          brief="Photos page load" />
      </div>
    </div>

    <div className="work-details__visual">
      <div className="work-details__wrapper">
        <div className="work-details__visual__title">
          <p className="typography-lead">Useful things I learned</p>
        </div>

        <div className="worl-details__quote">
          <q>Humans don't necessarily act as they state they would.</q>
          <q>Users are rarely aware of how websites use their data.</q>
          <q>Clarity is the best friend of uncertainty - balance.</q>
        </div>
      </div>
    </div>
  </section>
);

export default WorkDejavu;
