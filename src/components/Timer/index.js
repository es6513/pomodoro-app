import React, { use } from "react";
import { PropTypes } from "prop-types";
import { TaskListContext } from "../../context";
import { timeConstants } from "../../context/taskLists/utils";

function Timer({ task, className }) {
  const { workTime, breakTime, isBreak, estimatedWorkTime } = task;

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

  return (
    <div className={className}>
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
  );
}

export default Timer;

Timer.propTypes = {
  task: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};
