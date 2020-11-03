import React from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

function NavItem({ to, className, activeClassName, handelCLick, children }) {
  return (
    <li className={className} onClick={handelCLick}>
      <NavLink to={to} activeClassName={activeClassName}>
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  handelCLick: PropTypes.func,
  children: PropTypes.any.isRequired,
};

NavItem.defaultProps = {
  className: "",
  activeClassName: "",
  handelCLick: () => {},
};
