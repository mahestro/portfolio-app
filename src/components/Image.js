import React from 'react';
import PropTypes from 'prop-types';

const Image = ({img, img2x, caption}) => (
  <div className="work-details__visual__shot__photo">
    <img
      src={img}
      srcSet={`${img2x} 2x`}
      alt={caption && caption !== '' ? caption : ''} />
    {
      caption && caption !== '' &&
      <div className="work-details__visual__shot__photo__caption">{caption}</div>
    }
  </div>
);

Image.propTypes = {
  img:     PropTypes.string.isRequired,
  img2x:   PropTypes.string.isRequired,
  caption: PropTypes.string
};

export default Image;
