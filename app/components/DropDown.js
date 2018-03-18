import React from 'react';
import PropTypes from 'prop-types';

const DropDown = (props) => {
  return (
    <div className="styled-select">
      <select onChange={props.onChange}>
        <option value="0">Progress#1</option>
        <option value="1">Progress#2</option>
        <option value="2">Progress#3</option>
      </select>
    </div>
  );
};

DropDown.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default DropDown;
