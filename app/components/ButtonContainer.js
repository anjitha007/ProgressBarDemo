import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import DropDown from './DropDown';

const ButtonContainer = (props) => {
  return (
    <div className="button-container">
      <DropDown options={props.options} onChange={props.onChange} />
      {props.buttons.map((item, index) =>
        <Button label={item} index={index} onClick={props.onClick} />)
      }
    </div>
  );
};

ButtonContainer.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.number).isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ButtonContainer;
