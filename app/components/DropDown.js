import React from 'react';
import PropTypes from 'prop-types';

const DropDown = (props) => {
  return (
    <div className="styled-select">
      <select onChange={props.onChange}>
        {props.options.map((item, index) =>
          <option value={index}>Progress#{index + 1}</option>)
        };
      </select>
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default DropDown;
