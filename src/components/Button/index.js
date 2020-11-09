import React from "react";
import { PropTypes } from "prop-types";

function Button({ className, children, handleClick, ...restProps }) {
  return (
    <button className={className} onClick={handleClick} {...restProps}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  className: "",
  handleClick: () => null,
};
