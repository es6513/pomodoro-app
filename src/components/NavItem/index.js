import React from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

function NavItem({ to }) {
  return (
    <li>
      <NavLink to={to}>{to}</NavLink>
    </li>
  );
}

export default NavItem;

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
};
