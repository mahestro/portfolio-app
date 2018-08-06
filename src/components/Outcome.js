import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Outcome = ({id, title, brief}) => (
  <div className="work-details__outcome">
    <Icon id={id} />
    <h5>{title}</h5>
    {brief}
  </div>
);

Outcome.propTypes = {
  id:    PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  brief: PropTypes.string
};

export default Outcome;
