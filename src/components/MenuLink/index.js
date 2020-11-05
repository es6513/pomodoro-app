import React from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

function MenuLink({ to, activeClassName, ...restProps }) {
  return <NavLink to={to} activeClassName={activeClassName} {...restProps} />;
}

export default MenuLink;

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
};

MenuLink.defaultProps = {
  activeClassName: "",
};
