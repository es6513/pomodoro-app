import React, { useState, useCallback } from "react";
import classNames from "classnames";
import { config } from "../../../config";
import HeadTitle from "../../../components/HeadTitle";
import withAsideLayout from "../../../hoc/withAsideLayout";
import useInput from "../../../hooks/useInput";
import Tomato from "../../../components/Tomato";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const { css } = config;
const { ROOT_CLASS } = css;

function NewTask() {
  const [bindingInputProps, initializeTodoInput] = useInput("");
  const [hoverRate, setHoverRate] = useState(1);
  const [estimateRate, setEstimateRate] = useState(1);
  const {
    register: formRegister,
    errors: formErrors,
    formState,
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    criteriaMode: "all",
  });

  const { isValid } = formState;

  const onSubmit = () => {
    initializeTodoInput();
  };
  const handleTomatoClass = (index) => {
    const activeCondition = index + 1 <= hoverRate || index + 1 <= estimateRate;
    const tomatoRateClass = classNames({
      [`${ROOT_CLASS}__form-rate-tomato`]: !activeCondition,
      [`${ROOT_CLASS}__form-rate-tomato__active`]: activeCondition,
    });

    return tomatoRateClass;
  };

  const submitButtonClassName = classNames({
    [`${ROOT_CLASS}__form-submit-button`]: true,
  });

  const handleEstimateRate = (value) => {
    setEstimateRate(value);
  };

  const handleHoverRate = (value) => {
    setHoverRate(value);
  };
  console.log(formErrors);
  return (
    <div className={`${ROOT_CLASS}__aside-panel__new-task`}>
      <HeadTitle>ADD NEW TASK</HeadTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${ROOT_CLASS}__form-group`}>
          <label htmlFor="todoItem" className={`${ROOT_CLASS}__form-label`}>
            TASK TITLE
          </label>
          <Input
            className={`${ROOT_CLASS}__form-input`}
            inputName="todoItem"
            useFormRef={formRegister({
              required: "This field is required.",
            })}
            errors={formErrors}
            {...bindingInputProps}
          />
        </div>
        <div className={`${ROOT_CLASS}__form-group`}>
          <label className={`${ROOT_CLASS}__form-label`}>
            ESTIMATED TOMATO
          </label>
          <div
            className={`${ROOT_CLASS}__form-rate-group`}
            onMouseLeave={() => handleHoverRate(1)}
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

        <button
          className={submitButtonClassName}
          disabled={!isValid}
          type="submit"
        >
          ADD TASK
        </button>
      </form>
    </div>
  );
}

export default withAsideLayout(NewTask);
