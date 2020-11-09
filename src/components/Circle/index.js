import React from "react";
import { PropTypes } from "prop-types";

function Circle({ className, ...restProps }) {
  return <span className={className} {...restProps}></span>;
}

export default Circle;

Circle.propTypes = {
  className: PropTypes.string,
};

Circle.defaultProps = {
  className: "",
};
