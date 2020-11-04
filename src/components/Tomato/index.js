import React from "react";
import Icons from "../Icon";
import { PropTypes } from "prop-types";

function Tomato({ className, handleClick, handleMouseOver }) {
  return (
    <span
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseOver}
    >
      <Icons.TomatoColor />
    </span>
  );
}

export default Tomato;

Tomato.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  handleMouseOver: PropTypes.func,
};

Tomato.defaultProps = {
  className: "",
  handleClick: () => null,
  handleMouseOver: () => null,
};
