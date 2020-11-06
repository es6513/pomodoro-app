import React from "react";
import { PropTypes } from "prop-types";

function Button({ className, children, ...restProps }) {
  return (
    <button className={className} {...restProps}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "",
};
