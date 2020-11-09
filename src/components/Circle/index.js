import React from "react";
import { PropTypes } from "prop-types";

function Circle({ estimatedTomato, finishTomato, className, ...restProps }) {
  const renderCircle = () => {
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
    } else if (estimatedTomato <= finishTomato) {
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
  return <div>{renderCircle()}</div>;
}

export default Circle;

Circle.propTypes = {
  estimatedTomato: PropTypes.number.isRequired,
  finishTomato: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Circle.defaultProps = {
  className: "",
};
