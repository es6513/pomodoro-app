import React, { useState } from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import Tomato from "../Tomato";
import { config } from "../../config";

const { css } = config;
const { ROOT_CLASS } = css;

function TomatoRate({ handleClick, estimateRate }) {
  const [hoverRate, setHoverRate] = useState(1);

  const handleHoverRate = (value) => {
    setHoverRate(value);
  };

  const handleTomatoClass = (index) => {
    const activeCondition = index + 1 <= hoverRate || index + 1 <= estimateRate;
    const tomatoRateClass = classNames({
      [`${ROOT_CLASS}__form-rate-tomato`]: !activeCondition,
      [`${ROOT_CLASS}__form-rate-tomato__active`]: activeCondition,
    });

    return tomatoRateClass;
  };

  return (
    <div
      className={`${ROOT_CLASS}__form-rate-group`}
      onMouseLeave={() => handleHoverRate(1)}
    >
      {new Array(10).fill().map((el, index) => (
        <Tomato
          key={index}
          className={handleTomatoClass(index)}
          handleClick={() => handleClick(index + 1)}
          handleMouseOver={() => handleHoverRate(index + 1)}
        />
      ))}
    </div>
  );
}

export default TomatoRate;

TomatoRate.propTypes = {
  handleClick: PropTypes.func.isRequired,
  estimateRate: PropTypes.number.isRequired,
};
