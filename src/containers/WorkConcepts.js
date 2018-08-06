import React from 'react';
import Hero from '../components/Hero';
import UiConceptDisplay from '../components/UiConceptDisplay';
import imgCover from '../i/concepts-cover.png';
import imgCover2x from '../i/concepts-cover@2x.png';
import imgConcept1 from '../i/concepts-visual-1.jpg';
import imgConcept12x from '../i/concepts-visual-1@2x.jpg';
import imgConcept2 from '../i/concepts-visual-2.jpg';
import imgConcept22x from '../i/concepts-visual-2@2x.jpg';
import imgConcept3 from '../i/concepts-visual-3.jpg';
import imgConcept32x from '../i/concepts-visual-3@2x.jpg';
import imgConcept4 from '../i/concepts-visual-4.jpg';
import imgConcept42x from '../i/concepts-visual-4@2x.jpg';
import imgConcept5 from '../i/concepts-visual-5.jpg';
import imgConcept52x from '../i/concepts-visual-5@2x.jpg';
import imgConcept6 from '../i/concepts-visual-6.jpg';
import imgConcept62x from '../i/concepts-visual-6@2x.jpg';
import imgConcept7 from '../i/concepts-visual-7.jpg';
import imgConcept72x from '../i/concepts-visual-7@2x.jpg';


const WorkConcepts = () => (
  <section className="work-details">
    <Hero
      title="UI Concepts and Exploration"
      brief="UI Design and exploration for design competitions in Topcoder (wins), clients and side fun projects"
      img={imgCover}
      img2x={imgCover2x}
      customClass="work-details__header--concepts" />

    <UiConceptDisplay
      title="Un oeillet sur la voie du destin"
      img={imgConcept1}
      img2x={imgConcept12x}>
      <p>Brand presence and marketing project for a Portuguese documentary, focusing on presenting the film vision and values, with the goal of informing users as well as capturing the interest of possible investors.</p>
      <p><strong>Target:</strong> Web (responsive)</p>
    </UiConceptDisplay>

    <UiConceptDisplay
      title="Zurich Employee Hub Application"
      img={imgConcept2}
      img2x={imgConcept22x}>
      <p>As part of a large set of internal applications for employees, a mobile application was created to host quick access and reference to all these applications, to allow discoverability and proper usage of them.</p>
      <p><strong>Target:</strong> iOS (Phone)<br />
      <strong>Rights:</strong> Reserved to Topcoder</p>
    </UiConceptDisplay>

    <UiConceptDisplay
      title="Car Shopping Online Application"
      img={imgConcept3}
      img2x={imgConcept32x}>
      <p>Native android application for an online vehicle marketplace targeted to users within the US. Followed material design guidelines.</p>
      <p><strong>Target:</strong> Android<br />
      <strong>Rights:</strong> Reserved to Topcoder</p>
    </UiConceptDisplay>

    <UiConceptDisplay
      title="Zurich Employee Hub Application"
      img={imgConcept2}
      img2x={imgConcept22x}>
      <p>As part of a large set of internal applications for employees, a mobile application was created to host quick access and reference to all these applications, to allow discoverability and proper usage of them.</p>
      <p><strong>Target:</strong> iOS (Phone)<br />
      <strong>Rights:</strong> Reserved to Topcoder</p>
    </UiConceptDisplay>

    <UiConceptDisplay
      title="USA Diving Team Application"
      img={imgConcept4}
      img2x={imgConcept42x}>
      <p>Native iPad application for athletes and coaches of the US National Diving Team. Main goal to keep in mind was to introduce gamification concepts to the training process of athletes to keep them engaged, at the same time as tracking personal records and progression.</p>
      <p><strong>Target:</strong> iOS (iPad)<br />
      <strong>Rights:</strong> Reserved to Topcoder</p>
    </UiConceptDisplay>

    <UiConceptDisplay
      title="Appirio Events Application"
      img={imgConcept5}
      img2x={imgConcept52x}>
      <p>Hybrid mobile application design targeted to users who attended an onsite event. Users would receive a reward for filling a post-event survey within this application. The application walks the user through the process in a friendly fashion providing a reward at the end after identity confirmation.</p>
      <p><strong>Target:</strong> Android and iOS (hybrid)<br />
      <strong>Rights:</strong> Reserved to Topcoder</p>
    </UiConceptDisplay>

    <UiConceptDisplay
      title="Wipro Event Application"
      img={imgConcept6}
      img2x={imgConcept62x}>
      <p>The biggest fitness event of the year for the company needed an application to help users tracking down their progress, following news and performing right away activities during event through the application.</p>
      <p><strong>Target:</strong> Android and iOS (hybrid)<br />
      <strong>Rights:</strong> Reserved to Topcoder</p>
    </UiConceptDisplay>

    <UiConceptDisplay
      title="Skyzone Park Dashboards"
      img={imgConcept7}
      img2x={imgConcept72x}>
      <p>A well-known attraction park in the US needed to unify the booking process and analyse big data through dashboards, all through a non-traditional giant touch screen, for park users and managers. A set of flows and dashboards were created to fulfil the requirements.</p>
      <p><strong>Target:</strong> Custom touch-screen device<br />
      <strong>Rights:</strong> Reserved to Topcoder</p>
    </UiConceptDisplay>
  </section>
);

export default WorkConcepts;
