import React from 'react';
import PropTypes from 'prop-types';
import * as orientations from '../constants/system';
import Icon from '../components/Icon';

const Work = ({title, tags, description, link, img, img2x, orientation, customCoverClass}) => {
  let photoClass = 'work__item__photo';
  let orientationClass = 'work__item';

  if (customCoverClass && customCoverClass.length > 0) {
    photoClass += ` work__item__photo--${customCoverClass}`;
  }

  if (orientation && orientation.length > 0 && orientation === orientations.CARD_ORIENTATION_LEFT) {
    orientationClass += ' work__item--left-orientation';
  }

  return (
    <article className={orientationClass}>
      <div className={photoClass}>
        <img
          src={img}
          srcSet={`${img2x} 2x`}
          alt={title} />
      </div>
      <aside className="work__item__info">
        <div className="work__item__info__wrapper">
          <h5>{title}</h5>
          <p className="work__item__info__tags">{tags}</p>
          <p className="work__item__info__content">{description}</p>
          <div className="work__item__info__button">
            <a className="link" href={link}>View Case <Icon id="arrow" className="icon icon--xsmall" /></a>
          </div>
        </div>
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
