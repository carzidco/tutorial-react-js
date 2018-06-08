import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, value, onClick }) => {
  return (
    <button
      className = { `common-button ${className}` }
      onClick = { onClick }
    >
      { value }
    </button>
  );
};

Button.defaultProps = {
  className: '',
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default Button;
