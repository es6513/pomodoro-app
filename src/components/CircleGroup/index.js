import React from "react";
import { PropTypes } from "prop-types";
import Circle from "../Circle";
import { config } from "../../config";

const { css } = config;
const { ROOT_CLASS } = css;

function CircleGroup({
  estimatedTomato,
  finishTomato,
  className,
  dataSize,
  ...restProps
}) {
  const renderCircle = () => {
    if (estimatedTomato > finishTomato) {
      return (
        <div className={`${ROOT_CLASS}__circle-group`} {...restProps}>
          {new Array(finishTomato).fill().map((el, index) => (
            <Circle
              key={index}
              className={`${ROOT_CLASS}__circle`}
              data-fill="fill"
              data-size={dataSize}
            />
          ))}
          {new Array(estimatedTomato).fill().map((el, index) => (
            <Circle
              key={index}
              className={`${ROOT_CLASS}__circle`}
              data-size={dataSize}
            />
          ))}
        </div>
      );
    } else if (estimatedTomato <= finishTomato) {
      return (
        <div className={`${ROOT_CLASS}__circle-group`} {...restProps}>
          {new Array(finishTomato).fill().map((el, index) => (
            <Circle
              key={index}
              className={`${ROOT_CLASS}__circle`}
              data-fill="fill"
              data-size={dataSize}
            />
          ))}
        </div>
      );
    }
  };
  return <div>{renderCircle()}</div>;
}

export default CircleGroup;

CircleGroup.propTypes = {
  estimatedTomato: PropTypes.number.isRequired,
  finishTomato: PropTypes.number.isRequired,
  className: PropTypes.string,
  dataSize: PropTypes.string,
};

CircleGroup.defaultProps = {
  className: "",
  dataSize: "small",
};
