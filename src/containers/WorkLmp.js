import React from 'react';
import Hero from '../components/Hero';
import Image from '../components/Image';
import Outcome from '../components/Outcome';
import imgCover from '../i/lomejor-cover.png';
import imgCover2x from '../i/lomejor-cover@2x.png';
import imgBranding from '../i/lomejor-branding.jpg';
import imgBranding2x from '../i/lomejor-branding@2x.jpg';
import imgVisual1 from '../i/lomejor-visual-1.jpg';
import imgVisual12x from '../i/lomejor-visual-1@2x.jpg';
import imgVisual2 from '../i/lomejor-visual-2.jpg';
import imgVisual22x from '../i/lomejor-visual-2@2x.jpg';

const WorkLmp = () => (
  <section className="work-details">
    <Hero
      title="News Franchise"
      brief="Engaging community-based news website, mainly targeted to users from my home town to create acknowledgement of the culture and positive aspects to share about the town"
      img={imgCover}
      img2x={imgCover2x}
      customClass="work-details__header--lmp" />

    <div className="work-details__content">
      <div className="work-details__wrapper">
        <h4>Project Overview</h4>
        <p>Lomejordelpascua.com is a brand and content source mashup project. It was conceived as a local news website, starting as personal hobby slash fun side project, after two years of operations it ended up turning into the biggest news channel and cultural reference of a whole city in Venezuela, <a href="https://en.wikipedia.org/wiki/Valle_de_la_Pascua" rel="noopener noreferrer" target="_blank">Valle de La Pascua</a>, with a 80,000+ population at the moment.</p>
        <p>The main goals of the website were to informe, engage and entertain users through local-produced content such as news, hosted events, town information, interactive activities and games. Alongside with creating awareness of the local culture and traditions.</p>
        <p>Note: the website is not operative any longer.</p>

        <p><strong>Timeline: </strong><br />
        2008 - 2014</p>

        <p><strong>Role: </strong><br />
        It was my first project as entrepreneur, having the opportunity to ideate a whole product from scratch, the way the business was going to be developed, marketed, advertised and sold. Besides co-founder and hands-over-everything, <strong>my main role was technology director</strong>, including responsibilities such as: Planning, defining scope and strategy for the website,  creating the software architecture design for the project, designing the brand identity of the product, designing the UI, developing the frontend and backend code. Custom CMS included, supporting and maintaining the website.</p>

        <h5 className="title-space">Target Audience</h5>
        <p>Knowing our audience was key to succeed delivering what they needed. The typical website user is a local native, mainly. At the moment, internet culture was not very strong in the city, 60% of the population had internet access in their home computers, 85% had internet access on their cellphones, mostly used for tasks such as writing emails to loved ones who lived outside of the city (most common pattern of youngsters who traveled to study in universities in big cities), messaging, reading news and gaming, according to the performed surveys (500 samples, manual).</p>
        <p>The main channel to receive news was radio, seconded by one daily journal. This represented a challenge to fight against (more below).</p>

        <div className="work-details__twocols">
          <div className="work-details__twocols__left">
            <h5>The Challenge</h5>
            <p>Besides the challenge, excitement and fears of producing and launching a website at this scale from scratch, there were unique obstacles to think about before the launch and others during the lifecycle of the project.</p>
            <ul className="bullets">
              <li><span>Change resistance. It’s natural, after creating our user groups and personas (radio and daily journal were strong), it was clear the fight was going to be difficult to introduce the news through internet.</span></li>
              <li><span>Presentation and structure of the massive amount of content. Besides news, events and sports information of the city, we needed to allocate engaging spaces to make the city popular.</span></li>
              <li><span>Draw users back to the site frequently.</span></li>
              <li><span>Lack of editorial experience. We were not experts in editorial, we only had the platform to put content, we were missing an important element.</span></li>
              <li><span>Coverage. Reaching out our audience required due to the lack of internet experience.</span></li>
            </ul>
          </div>

          <div className="work-details__twocols__right">
            <h5>Contribution</h5>
            <ul className="bullets">
              <li><span>Benchmarking</span></li>
              <li><span>Marketing Strategy</span></li>
              <li><span>Search Engine Optimisation</span></li>
              <li><span>User Research</span></li>
              <li><span>Branding Identity</span></li>
              <li><span>UI Design</span></li>
              <li><span>Frontend development</span></li>
              <li><span>Backend (custom CMS)</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="work-details__content">
      <div className="work-details__wrapper">
        <h4>Solution</h4>
        <p>In front of such an amount of interesting challenges we had to spend a good amount of time doing research, iterating over the problems and possible solutions for more than seven weeks. Luckily we had the time available and we found the key elements to solve these problems thanks to this iterative process.</p>
        <p>One of the main concerns was the change resistance. We concluded that quality content was going to be a fundamental item to convince users to quit or switch from radio and journal to digital (web). At such a level that we made this a high level design principle « we cast positive news to positive people », which is why the name of the site has « lomejor » right at the beginning which means « the best of ». This meant that, differently as a typical media (in Venezuela), we wouldn’t display news that would feel sad somehow, mostly positive news that would make the user feel proud of this humble town. Content strategy and editorial should be aligned on this sense in order to guarantee a positive tone among all types of articles or website content. This main principle naturally solved some other problems/challenges we were facing, such as the visit frequency expectations and coverage.</p>
        <p>To solve the lack of editorial experience we decided to open up the website to known journalists from the city, a partnership program which allowed us to display local news produced by local journalists as they made profits out of it.</p>
        <p>Then came the engagement, taking the visual design direction to an emotional area, feeling of belonging, making the user feel part of a community, pride. This turned out in an exciting, modern and useful design targeted to non savvy web users who proved that using the web is not rocket science.</p>
      </div>
    </div>

    <div className="work-details__visual">
      <div className="work-details__wrapper">
        <div className="work-details__visual__title">
          <p className="typography-lead">Branding/logo</p>
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
    </div>

    <div className="work-details__content">
      <div className="work-details__wrapper">
        <h4>Outcome</h4>
      </div>

      <div className="work-details__outcome-container">
        <Outcome
          id="team"
          title="80,000+"
          brief="Page visits per day average" />

        <Outcome
          id="page-view"
          title="10,000+"
          brief="Unique visitors per day average ~10% of the population" />
      </div>

      <div className="work-details__outcome-container">
        <Outcome
          id="city"
          title="#1"
          brief="Website for reference of the city" />

        <Outcome
          id="search-engine"
          title="#1"
          brief="In search results in most common search engines  for almost any keyword related to the city name" />
      </div>
    </div>

    <div className="work-details__visual">
      <div className="work-details__wrapper">
        <div className="work-details__visual__title">
          <p className="typography-lead">Useful things I learned</p>
        </div>
      </div>
    </div>

    <div className="work-details__quote">
      <q>Understanding and creating business requirements.</q>
      <q>Identifying business opportunities.</q>
      <q>Dealing with humans requires more than diplomacy and psychology expertise, it requires genuine humility.</q>
      <q>Give something back to the community.</q>
    </div>
  </section>
);

export default WorkLmp;
