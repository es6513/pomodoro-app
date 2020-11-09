import React from "react";
import { PropTypes } from "prop-types";

function Circle({ className, dataSize, percentage, ...restProps }) {
  let width = dataSize === "small" ? 10 : 20;

  const circleRadius = width / 4;
  const strokeWidth = width;

  const cx = width / 2 - 1,
    cy = width / 2 - 1;

  const circlePerimeter = Math.round(circleRadius * 2 * 3.1415);

  return (
    <svg width={width} height={width} className={className} {...restProps}>
      <circle
        r={circleRadius}
        cx={cx}
        cy={cy}
        className="circleSector"
        strokeWidth={strokeWidth / 2}
        strokeDasharray={`${percentage} ${circlePerimeter}`}
      />
    </svg>
  );
}

export default Circle;

Circle.propTypes = {
  className: PropTypes.string,
  dataSize: PropTypes.string,
  percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

Circle.defaultProps = {
  className: "",
  dataSize: "small",
};
