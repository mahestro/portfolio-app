import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({title, brief, img, img2x, customClass}) => (
  <div className={`work-details__header ${customClass && customClass !== '' ? customClass : ''}`}>
    <div className="work-details__header__content">
      <h3>{title}</h3>
      <p>{brief}</p>
    </div>
    <div className="work-details__header__shot">
      <img
        src={img}
        srcSet={`${img2x} 2x`}
        alt={title}/>
    </div>
  </div>
);

Hero.propTypes = {
  title:       PropTypes.string.isRequired,
  brief:       PropTypes.string.isRequired,
  img:         PropTypes.string,
  img2x:       PropTypes.string,
  customClass: PropTypes.string
};

export default Hero;
