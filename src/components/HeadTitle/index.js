import React from "react";
import { PropTypes } from "prop-types";

function HeadTitle({ children, ...props }) {
  return <h1 {...props}>{children}</h1>;
}

HeadTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HeadTitle;
