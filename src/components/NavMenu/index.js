import React from "react";
import { PropTypes } from "prop-types";

function NavMenu({ className, children }) {
  return <ul className={className}>{children}</ul>;
}

export default NavMenu;

NavMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

NavMenu.defaultProps = {
  className: "",
};
