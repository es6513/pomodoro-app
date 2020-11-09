import React from "react";
import { PropTypes } from "prop-types";

function MenuItem({ className, handelClick, ...restProps }) {
  return <li className={className} onClick={handelClick} {...restProps}></li>;
}

export default MenuItem;

MenuItem.propTypes = {
  className: PropTypes.string,
  handelClick: PropTypes.func,
};

MenuItem.defaultProps = {
  className: "",
  handelClick: () => null,
};
