import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import * as orientations from '../constants/system';
import Icon from '../components/Icon';

const Work = ({title, tags, description, link, img, img2x, orientation, customCoverClass}) => {
  let photoClass = 'work__item__photo';
  let orientationClass = 'work__item';
  let offsetY = 35;
  let senseUpwards = false;

  if (customCoverClass && customCoverClass.length > 0) {
    photoClass += ` work__item__photo--${customCoverClass}`;
  }

  if (orientation && orientation.length > 0 && orientation === orientations.CARD_ORIENTATION_LEFT) {
    orientationClass += ' work__item--left-orientation';
    senseUpwards = true;
  }

  return (
    <article className={orientationClass}>
      <div className={photoClass}>
        <img
          src={img}
          srcSet={`${img2x} 2x`}
          alt={title} />
      </div>

      <aside>
        <Parallax
          offsetYMin={`${offsetY * -1}px`}
          offsetYMax={`${offsetY}px`}
          slowerScrollRate={senseUpwards}>
          <div className="work__item__info">
            <div className="work__item__info__wrapper">
              <h5>{title}</h5>
              <p className="work__item__info__tags">{tags}</p>
              <p className="work__item__info__content">{description}</p>
              <div className="work__item__info__button">
                <Link className="link" to={link}>View Case <Icon id="arrow" className="icon icon--xsmall" /></Link>
              </div>
            </div>
          </div>
        </Parallax>
      </aside>
    </article>
  );
};

Work.propTypes = {
  title:            PropTypes.string.isRequired,
  tags:             PropTypes.string.isRequired,
  link:             PropTypes.string.isRequired,
  img:              PropTypes.string,
  img2x:            PropTypes.string,
  orientation:      PropTypes.string,
  customCoverClass: PropTypes.string
};

export default Work;
