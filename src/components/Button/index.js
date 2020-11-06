import React from "react";
import { PropTypes } from "prop-types";

function Button({ className, children, handleCLick, ...restProps }) {
  return (
    <button className={className} onClick={handleCLick} {...restProps}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  handleCLick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: "",
  handleCLick: () => null,
};
