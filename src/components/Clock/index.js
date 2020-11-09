import React from "react";
import { PropTypes } from "prop-types";

function Clock({ estimatedTomato, finishTomato, className, ...restProps }) {
  const renderClock = () => {
    console.log(estimatedTomato);

    if (estimatedTomato > finishTomato) {
      return (
        <div>
          {new Array(finishTomato).fill().map((el, index) => (
            <span
              key={index}
              className={className}
              data-fill="fill"
              {...restProps}
            ></span>
          ))}
          {new Array(estimatedTomato).fill().map((el, index) => (
            <span key={index} className={className} {...restProps}></span>
          ))}
        </div>
      );
    } else if (estimatedTomato < finishTomato) {
      return (
        <div>
          {new Array(finishTomato).fill().map((el, index) => (
            <span
              key={index}
              className={className}
              data-fill="fill"
              {...restProps}
            ></span>
          ))}
        </div>
      );
    }
  };
  return <div>{renderClock()}</div>;
}

export default Clock;

Clock.propTypes = {
  estimatedTomato: PropTypes.number.isRequired,
  finishTomato: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Clock.defaultProps = {
  className: "",
};
