import React from "react";
import { PropTypes } from "prop-types";

function MenuItem({ className, handelCLick, ...restProps }) {
  return <li className={className} onClick={handelCLick} {...restProps}></li>;
}

export default MenuItem;

MenuItem.propTypes = {
  className: PropTypes.string,
  handelCLick: PropTypes.func,
};

MenuItem.defaultProps = {
  className: "",
  handelCLick: () => null,
};
