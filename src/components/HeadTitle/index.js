import React from "react";
import { PropTypes } from "prop-types";

function HeadTitle({ headTag, children, ...restProps }) {
  return React.createElement(headTag, { ...restProps }, children);
}

HeadTitle.propTypes = {
  headTag: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default HeadTitle;
