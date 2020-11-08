import React, { useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import { timeConstants } from "../../context/taskLists/utils";
import { config } from "../../config";

import Button from "../Button";
import Start from "../../assets/icons/start_gray.svg";
import Pause from "../../assets/icons/pause_gray.svg";
import Reset from "../../assets/icons/reset_gray.svg";

const { css } = config;
const { ROOT_CLASS } = css;

function Timer({ task, isCountDown, className }) {
  const { workTime, breakTime, isBreak, estimatedWorkTime } = task;

  //handle time appear
  const handleTimePercentage = (time, unitTime) => {
    return Math.round((time / unitTime) * (1500 / 2));
  };

  const handleRemainTime = (remainTime) => {
    // const minutes =
    const date = new Date(0);
    date.setSeconds(remainTime);
    const timeString = date.toISOString().substr(14, 5);
    return timeString;
  };

  const remainTime = isBreak
    ? handleRemainTime(timeConstants.oneUnitBreakSeconds - breakTime)
    : handleRemainTime(timeConstants.oneUnitWorkSeconds - workTime);

  const percentage = isBreak
    ? handleTimePercentage(breakTime, timeConstants.oneUnitBreakSeconds)
    : handleTimePercentage(workTime, timeConstants.oneUnitWorkSeconds);

  //handle side effect
  const timeoutId = useRef(null);

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     clearTimeout(timeoutId.current);
  //   };
  // }, []);

  return (
    <div className={className}>
      <div className={`${ROOT_CLASS}__timer-clock`}>
        <svg width="350" height="300">
          <circle
            cx="175"
            cy="150"
            r="119"
            fill="#fcfcfc"
            stroke={isBreak ? "#b5e254" : "#acacac"}
            strokeWidth="40"
          />
          <circle
            cx="175"
            cy="150"
            r="119"
            fill="none"
            stroke={isBreak ? "#acacac" : "#ea5548"}
            strokeWidth="40"
            strokeDasharray={`${percentage},10000`}
            transform="rotate(-90,175,150)"
          />

          <text textAnchor="middle" x="175" y="150">
            {remainTime}
          </text>
        </svg>
      </div>
      <div className={`${ROOT_CLASS}__button-group`}>
        <Button
          data-size="medium"
          data-radius="rounded"
          type="button"
          className={`${ROOT_CLASS}__timer-button`}
        >
          <img
            src={Start}
            alt="pause"
            className={`${ROOT_CLASS}__timer-button__icon`}
          />
        </Button>
        <Button
          data-size="medium"
          data-radius="rounded"
          type="button"
          className={`${ROOT_CLASS}__timer-button`}
        >
          <img
            src={Pause}
            alt="pause"
            className={`${ROOT_CLASS}__timer-button__icon`}
          />
        </Button>
        <Button
          data-size="medium"
          data-radius="rounded"
          type="button"
          className={`${ROOT_CLASS}__timer-button`}
        >
          <img
            src={Reset}
            alt="pause"
            className={`${ROOT_CLASS}__timer-button__icon`}
          />
        </Button>
      </div>
    </div>
  );
}

export default Timer;

Timer.propTypes = {
  task: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  isCountDown: PropTypes.bool.isRequired,
  handleCountDown: PropTypes.func.isRequired,
  handleBreak: PropTypes.func.isRequired,
  handleWorkTIme: PropTypes.func.isRequired,
  handleBreakTIme: PropTypes.func.isRequired,
};
