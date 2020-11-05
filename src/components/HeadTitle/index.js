import React from "react";
import { PropTypes } from "prop-types";

function HeadTitle({ children, ...restProps }) {
  return <h1 {...restProps}>{children}</h1>;
}

HeadTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HeadTitle;
