import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className="button" value={props.label} key={props.index}>
      {props.label}
    </button>
  );
};

Button.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
