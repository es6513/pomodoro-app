import React from "react";
import { PropTypes } from "prop-types";

function PanelMenu({ className, children }) {
  return <ul className={className}>{children}</ul>;
}

export default PanelMenu;

PanelMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PanelMenu.defaultProps = {
  className: "",
};
