import React from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

function NavItem({ to, className, children }) {
  return (
    <li className={className}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}

export default NavItem;

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

NavItem.defaultProps = {
  className: "",
};
