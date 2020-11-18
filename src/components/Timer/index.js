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

function Timer({
  task,
  className,
  isCountDown,
  handleCountDown,
  handleBreak,
  handleWorkTIme,
  handleBreakTIme,
  handleUpdateTask,
}) {
  const { id, workTime, breakTime, isBreak, finishTomato } = task;

  //handle time percentage
  const circleRadius = 120;
  const circlePerimeter = Math.round(circleRadius * 2 * 3.1415);

  const percentage = isBreak
    ? breakTime / timeConstants.oneUnitBreakSeconds
    : workTime / timeConstants.oneUnitWorkSeconds;

  const handleTimePercentage = (percentage) => {
    return (percentage * circlePerimeter).toFixed(2);
  };

  const circleDash = handleTimePercentage(percentage);

  //handle Remain time
  const handleRemainTime = (remainTime) => {
    const date = new Date(0);
    date.setSeconds(remainTime);
    const timeString = date.toISOString().substr(14, 5);
    return timeString;
  };

  const remainTime = isBreak
    ? handleRemainTime(timeConstants.oneUnitBreakSeconds - breakTime)
    : handleRemainTime(timeConstants.oneUnitWorkSeconds - workTime);

  //handle side effect
  const timeoutId = useRef(null);
  const checkTimeOut = (time, uniTime) => {
    return time === uniTime ? true : false;
  };

  const timeOut = isBreak
    ? checkTimeOut(breakTime, timeConstants.oneUnitBreakSeconds)
    : checkTimeOut(workTime, timeConstants.oneUnitWorkSeconds);

  useEffect(() => {
    if (isCountDown) {
      if (!isBreak && !timeOut) {
        timeoutId.current = setTimeout(() => {
          handleWorkTIme({ id, workTime: workTime + 1 });
        }, 1000);
      } else if (isBreak && !timeOut) {
        timeoutId.current = setTimeout(() => {
          handleBreakTIme({ id, breakTime: breakTime + 1 });
        }, 1000);
      } else if (!isBreak && timeOut) {
        handleCountDown(false);
        handleBreak({ id, isBreak: true });
        handleWorkTIme({ id, workTime: 0 });
        handleUpdateTask({ id, finishTomato: finishTomato + 1 });
      } else if (isBreak && timeOut) {
        handleCountDown(false);
        handleBreak({ id, isBreak: false });
        handleBreakTIme({ id, breakTime: 0 });
      }
    }

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [
    id,
    isBreak,
    isCountDown,
    workTime,
    breakTime,
    finishTomato,
    timeOut,
    handleWorkTIme,
    handleBreak,
    handleBreakTIme,
    handleCountDown,
    handleUpdateTask,
  ]);

  const startTimer = () => {
    handleCountDown(true);
  };

  const pauseTimer = () => {
    handleCountDown(false);
  };

  const resetTimer = () => {
    if (isBreak) {
      handleBreakTIme({ id, breakTime: 0 });
    } else {
      handleWorkTIme({ id, workTime: 0 });
    }
  };
  return (
    <div className={className}>
      <div className={`${ROOT_CLASS}__timer`}>
        <svg width="350" height="300">
          <circle
            className={`${ROOT_CLASS}__timer__under-circle`}
            cx="175"
            cy="150"
            r="120"
            fill="#fcfcfc"
            stroke={isBreak ? "#b5e254" : "#acacac"}
            strokeWidth="40"
          />
          <circle
            className={`${ROOT_CLASS}__timer__upper-circle`}
            cx="175"
            cy="150"
            r="120"
            fill="none"
            stroke={isBreak ? "#acacac" : "#ea5548"}
            strokeWidth="40"
            strokeDasharray={`${circleDash},10000`}
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
          data-after="START"
          type="button"
          className={`${ROOT_CLASS}__timer-button`}
          handleClick={startTimer}
          disabled={isCountDown}
        >
          <img
            src={Start}
            alt="start"
            className={`${ROOT_CLASS}__timer-button__icon`}
          />
        </Button>
        <Button
          data-size="medium"
          data-radius="rounded"
          data-after="PAUSE"
          type="button"
          className={`${ROOT_CLASS}__timer-button`}
          handleClick={pauseTimer}
          disabled={!isCountDown}
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
          data-after="RESET"
          type="button"
          className={`${ROOT_CLASS}__timer-button`}
          handleClick={resetTimer}
          disabled={isCountDown || (isBreak ? breakTime === 0 : workTime === 0)}
        >
          <img
            src={Reset}
            alt="reset"
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
  className: PropTypes.string,
  isCountDown: PropTypes.bool.isRequired,
  handleCountDown: PropTypes.func.isRequired,
  handleBreak: PropTypes.func.isRequired,
  handleWorkTIme: PropTypes.func.isRequired,
  handleBreakTIme: PropTypes.func.isRequired,
  handleUpdateTask: PropTypes.func.isRequired,
};

Timer.defaultProps = {
  className: "",
};
