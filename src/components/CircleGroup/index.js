import React from "react";
import { PropTypes } from "prop-types";
import Circle from "../Circle";
import { timeConstants } from "../../context/taskLists/utils";
import { config } from "../../config";

const { css } = config;
const { ROOT_CLASS } = css;

function CircleGroup({
  task,
  estimatedTomato,
  finishTomato,
  className,
  dataSize,
  ...restProps
}) {
  //svg
  let width = dataSize === "small" ? 10 : 20;

  const circleRadius = width / 4;
  const strokeWidth = width;

  const cx = width / 2 - 1,
    cy = width / 2 - 1;

  //percentage

  const { workTime } = task;
  const circlePerimeter = Math.round(circleRadius * 2 * 3.1415);

  const handleTimePercentage = (time, unitTime) => {
    return ((time / unitTime) * circlePerimeter).toFixed(2);
  };
  const percentage = handleTimePercentage(
    workTime,
    timeConstants.oneUnitWorkSeconds
  );
  console.log(percentage);

  const renderCircle = () => {
    if (estimatedTomato > finishTomato) {
      return (
        <div className={`${ROOT_CLASS}__circle-group`} {...restProps}>
          {new Array(estimatedTomato)
            .fill()
            .map((el, index) => (
              <Circle
                key={index}
                className={`${ROOT_CLASS}__circle`}
                dataSize={dataSize}
                percentage={0}
              />
            ))
            .map((estimatedTomatoCircle, index) =>
              index < finishTomato ? (
                <Circle
                  key={index}
                  className={`${ROOT_CLASS}__circle`}
                  dataSize={dataSize}
                  percentage={circlePerimeter}
                />
              ) : (
                estimatedTomatoCircle
              )
            )
            .map((tomatoCircle, index) =>
              index === finishTomato ? (
                <Circle
                  key={index}
                  className={`${ROOT_CLASS}__circle`}
                  dataSize={dataSize}
                  percentage={percentage}
                />
              ) : (
                tomatoCircle
              )
            )}
        </div>
      );
    } else if (estimatedTomato <= finishTomato) {
      return (
        <div className={`${ROOT_CLASS}__circle-group`} {...restProps}>
          {new Array(finishTomato)
            .fill()
            .map((el, index) => (
              <Circle
                key={index}
                className={`${ROOT_CLASS}__circle`}
                dataSize={dataSize}
                percentage={circlePerimeter}
              />
            ))
            .concat([
              percentage > 0 ? (
                <Circle
                  key={finishTomato}
                  className={`${ROOT_CLASS}__circle`}
                  dataSize={dataSize}
                  percentage={percentage}
                />
              ) : null,
            ])}
        </div>
      );
    }
  };
  return <div>{renderCircle()}</div>;
}

export default CircleGroup;

CircleGroup.propTypes = {
  task: PropTypes.object.isRequired,
  estimatedTomato: PropTypes.number.isRequired,
  finishTomato: PropTypes.number.isRequired,
  className: PropTypes.string,
  dataSize: PropTypes.string,
};

CircleGroup.defaultProps = {
  className: "",
  dataSize: "small",
};
