import React from 'react';
import PropTypes from 'prop-types';

const UiConceptDisplay = ({img, img2x, title, children}) => (
  <div className="work-details__content">
    <div className="work-details__concept">
      <div className="work-details__concept__shot">
        <img
          src={img}
          srcSet={`${img2x} 2x`}
          alt={title} />
      </div>
      <div className="work-details__concept__info">
        <h5>{title}</h5>
        {children}
      </div>
    </div>
  </div>
);

UiConceptDisplay.propTypes = {
  img:      PropTypes.string.isRequired,
  img2x:    PropTypes.string.isRequired,
  title:    PropTypes.string,
  children: PropTypes.array
};

export default UiConceptDisplay;
