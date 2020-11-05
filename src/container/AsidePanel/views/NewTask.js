import React, { useState } from "react";
import classNames from "classnames";
import { config } from "../../../config";
import HeadTitle from "../../../components/HeadTitle";
import withAsideLayout from "../../../hoc/withAsideLayout";
import Tomato from "../../../components/Tomato";
import Input from "../../../components/Input";
import { useForm, Controller } from "react-hook-form";

const { css } = config;
const { ROOT_CLASS } = css;

const defaultValues = {
  id: "",
  taskTitle: "",
  estimatedTomato: 1,
  isArchived: false,
  isDone: false,
  isBreak: false,
};

function NewTask() {
  const [hoverRate, setHoverRate] = useState(1);
  const {
    register: formRegister,
    errors: formErrors,
    formState,
    control,
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    defaultValues,
  });

  const { isValid: formIsValid } = formState;

  const onSubmit = (data, e) => {
    console.log(data);
    reset(defaultValues);
  };
  const handleTomatoClass = (index, estimateRate) => {
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

  const handleHoverRate = (value) => {
    setHoverRate(value);
  };
  return (
    <div className={`${ROOT_CLASS}__aside-panel__new-task`}>
      <HeadTitle>ADD NEW TASK</HeadTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${ROOT_CLASS}__form-group`}>
          <label htmlFor="taskTitle" className={`${ROOT_CLASS}__form-label`}>
            TASK TITLE
          </label>
          <Input
            className={`${ROOT_CLASS}__form-input`}
            inputName="taskTitle"
            useFormRef={formRegister({
              required: "This field is required.",
            })}
            errors={formErrors}
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
            <Controller
              control={control}
              name="estimatedTomato"
              render={({ onChange, value }) =>
                new Array(10)
                  .fill()
                  .map((el, index) => (
                    <Tomato
                      key={index}
                      className={handleTomatoClass(index, value)}
                      handleClick={() => onChange(index + 1)}
                      handleMouseOver={() => handleHoverRate(index + 1)}
                    />
                  ))
              }
            />
          </div>
        </div>
        <button
          className={submitButtonClassName}
          disabled={!formIsValid}
          type="submit"
        >
          ADD TASK
        </button>
      </form>
    </div>
  );
}

export default withAsideLayout(NewTask);
