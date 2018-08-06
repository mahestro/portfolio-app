import React from 'react';
import Hero from '../components/Hero';
import Image from '../components/Image';
import imgCover from '../i/squidjob-cover.png';
import imgCover2x from '../i/squidjob-cover@2x.png';
import imgWf1 from '../i/squidjob-wf-1.jpg';
import imgWf12x from '../i/squidjob-wf-1@2x.jpg';
import imgWf2 from '../i/squidjob-wf-2.jpg';
import imgWf22x from '../i/squidjob-wf-2@2x.jpg';
import imgWf3 from '../i/squidjob-wf-3.jpg';
import imgWf32x from '../i/squidjob-wf-3@2x.jpg';
import imgWf4 from '../i/squidjob-wf-4.jpg';
import imgWf42x from '../i/squidjob-wf-4@2x.jpg';
import imgWf5 from '../i/squidjob-wf-5.jpg';
import imgWf52x from '../i/squidjob-wf-5@2x.jpg';
import imgWf6 from '../i/squidjob-wf-6.jpg';
import imgWf62x from '../i/squidjob-wf-6@2x.jpg';
import imgVisual1 from '../i/squidjob-visual-1.jpg';
import imgVisual12x from '../i/squidjob-visual-1@2x.jpg';
import imgVisual2 from '../i/squidjob-visual-2.jpg';
import imgVisual22x from '../i/squidjob-visual-2@2x.jpg';
import imgVisual3 from '../i/squidjob-visual-3.jpg';
import imgVisual32x from '../i/squidjob-visual-3@2x.jpg';
import imgVisual4 from '../i/squidjob-visual-4.jpg';
import imgVisual42x from '../i/squidjob-visual-4@2x.jpg';
import imgVisual5 from '../i/squidjob-visual-5.jpg';
import imgVisual52x from '../i/squidjob-visual-5@2x.jpg';
import imgVisual6 from '../i/squidjob-visual-6.jpg';
import imgVisual62x from '../i/squidjob-visual-6@2x.jpg';

const WorkSquidjob = () => (
  <section className="work-details">
    <Hero
      title="Household Service Marketplace"
      brief="Service providers connect with customers through an online tool/website, managing transactions, reviews and content"
      img={imgCover}
      img2x={imgCover2x}
      customClass="work-details__header--squidjob" />

    <div className="work-details__content">
      <div className="work-details__wrapper">
        <h4>Project Overview</h4>
        <p>The website goal is to provide service buyers and service providers with the most convenient venue where they can easily transact business with one another. Service buyers post orders related to household and automotive services. Qualified service providers provide quick estimates and bid against each other to get the job. The service provider with the winning bid will be the one given the chance to get in contact with the buyer and provide their services.</p>

        <p><strong>Timeline: </strong><br />
        11 Months (2011 - 2012)</p>

        <p><strong>Role: </strong><br />
        I participated as <strong>UI Designer and Frontend developer</strong>. The team was composed by several disciplines working remotely. My common responsibilities were related to requirements analysis, interaction design, UI design, frontend development, testing, among others.</p>

        <div className="work-details__twocols">
          <div className="work-details__twocols__left">
            <h5>The Challenge</h5>
            <p>Multiple critical workflows required to be designed, including  users transactions, rating and feedback. Some of these processes were complex, containing too many steps that could be difficult to use for novice users.</p>
            <p>Another major concern detected not only on this project, also in well seasoned competitors after studying them, was a weakness on reliability, people wouldn’t simply trust a written review of someone they don’t actually know.</p>
          </div>

          <div className="work-details__twocols__right">
            <h5>Contribution</h5>
            <ul className="bullets">
              <li><span>Wireframes</span></li>
              <li><span>Prototyping</span></li>
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
        <p>Considering the target audience and business goals, one of the main design decisions relied on simplicity, to offer a tool that was very easy to understand, focusing on relevance rather than precision.</p>
        <p>Supporting newcomers and novice users was achieved by using how-to instructions and visual prioritisation of the key tasks (onboarding). We ended up creating a user-friendly UI, easy to understand, making it suitable even for the most nontechnical users.</p>
        <p>We saw necessary to implement an unbiased advertisement system, where both parties can provide and share feedbacks and rate each other that will be visible for all users, including non registered users.</p>
      </div>
    </div>

    <div className="work-details__visual">
      <div className="work-details__wrapper">
        <div className="work-details__visual__title">
          <p className="typography-lead">Wireframes</p>
        </div>
      </div>

      <div className="work-details__visual__shot">
        <Image
          img={imgWf1}
          img2x={imgWf12x}
          caption="Home page" />
        <Image
          img={imgWf2}
          img2x={imgWf22x}
          caption="Job offers" />
        <Image
          img={imgWf3}
          img2x={imgWf32x}
          caption="Job details" />
        <Image
          img={imgWf4}
          img2x={imgWf42x}
          caption="Place estimate" />
        <Image
          img={imgWf5}
          img2x={imgWf52x}
          caption="Buyer dashboard" />
        <Image
          img={imgWf6}
          img2x={imgWf62x}
          caption="Post new job offer" />
      </div>
    </div>

    <div className="work-details__visual">
      <div className="work-details__wrapper">
        <div className="work-details__visual__title">
          <p className="typography-lead">Visual Design</p>
        </div>
      </div>

      <div className="work-details__visual__shot">
        <Image
          img={imgVisual1}
          img2x={imgVisual12x}
          caption="Home page - prototype version" />
        <Image
          img={imgVisual2}
          img2x={imgVisual22x}
          caption="Home page - refined after testing" />
        <Image
          img={imgVisual3}
          img2x={imgVisual32x}
          caption="Job details page" />
        <Image
          img={imgVisual4}
          img2x={imgVisual42x}
          caption="Place estimate assistant" />
        <Image
          img={imgVisual5}
          img2x={imgVisual52x}
          caption="Buyer's dashboard - prototype version" />
        <Image
          img={imgVisual6}
          img2x={imgVisual62x}
          caption="Buyer's dashboard - refine after testing" />
      </div>
    </div>

  </section>
);

export default WorkSquidjob;
