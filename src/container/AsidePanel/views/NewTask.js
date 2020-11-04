import React, { useState } from "react";
import classNames from "classnames";

import { config } from "../../../config";
import HeadTitle from "../../../components/HeadTitle";
import withAsideLayout from "../../../hoc/withAsideLayout";
import useInput from "../../../hooks/useInput";
import Tomato from "../../../components/Tomato";

const { css } = config;
const { ROOT_CLASS } = css;

function NewTask() {
  const [bindingProps, initializeTodoText] = useInput("");
  const [hoverRate, setHoverRate] = useState(1);
  const [estimateRate, setEstimateRate] = useState(1);

  const handleTomatoClass = (index) => {
    const activeCondition = index + 1 <= hoverRate || index + 1 <= estimateRate;
    const tomatoRateClass = classNames({
      [`${ROOT_CLASS}__form-rate-tomato`]: !activeCondition,
      [`${ROOT_CLASS}__form-rate-tomato__active`]: activeCondition,
    });

    return tomatoRateClass;
  };

  const handleEstimateRate = (value) => {
    setEstimateRate(value);
  };

  const handleHoverRate = (value) => {
    setHoverRate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    initializeTodoText();
  };
  return (
    <div className={`${ROOT_CLASS}__aside-panel__new-task`}>
      <HeadTitle>ADD NEW TASK</HeadTitle>
      <form onSubmit={handleSubmit}>
        <div className={`${ROOT_CLASS}__form-group`}>
          <label htmlFor="todoItem" className={`${ROOT_CLASS}__form-label`}>
            TASK TITLE
          </label>
          <input
            className={`${ROOT_CLASS}__form-input`}
            name="todoItem"
            type="text"
            {...bindingProps}
          />
        </div>
        <div className={`${ROOT_CLASS}__form-group`}>
          <label
            htmlFor="estimateTomato"
            className={`${ROOT_CLASS}__form-label`}
          >
            ESTIMATED TOMOTO
          </label>
          <div
            className={`${ROOT_CLASS}__form-rate-group`}
            onMouseLeave={() => setHoverRate(1)}
          >
            {new Array(10).fill().map((el, index) => (
              <Tomato
                key={index}
                className={handleTomatoClass(index)}
                handleClick={() => handleEstimateRate(index + 1)}
                handleMouseOver={() => handleHoverRate(index + 1)}
              />
            ))}
          </div>
        </div>
        <button className={`${ROOT_CLASS}__form-submit-button`} type="submit">
          ADD TASK
        </button>
      </form>
    </div>
  );
}

export default withAsideLayout(NewTask);
