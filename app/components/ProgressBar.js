import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  let progressPerc;
  if (props.progress <= 0) {
    progressPerc = '0%';
  } else if (props.progress >= 100) {
    progressPerc = '100%';
  } else {
    progressPerc = `${props.progress}%`;
  }
  const error = props.progress >= props.limit;
  const display = props.progress <= 0 ? progressPerc : `${props.progress}%`;
  return (
    <div className="progress" key={props.index}>
      <div
        className={error ? 'bar-alert' : 'bar'}
        style={{ width: progressPerc }}
      />
      <div className="display">{display}</div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};
export default ProgressBar;
