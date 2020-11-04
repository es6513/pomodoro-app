import React from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

function MenuLink({ to, activeClassName, ...props }) {
  return <NavLink to={to} activeClassName={activeClassName} {...props} />;
}

export default MenuLink;

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
};

MenuLink.defaultProps = {
  activeClassName: "",
};
