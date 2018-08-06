import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({title, brief, img, img2x}) => (
  <div className="work-details__header">
    <div>
      <h3>{title}</h3>
      <p>{brief}</p>
    </div>
    <div>
      <img
        src={img}
        srcSet={`${img2x} 2x`}
        alt={title}/>
    </div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  img:   PropTypes.string,
  img2x: PropTypes.string
};

export default Hero;
