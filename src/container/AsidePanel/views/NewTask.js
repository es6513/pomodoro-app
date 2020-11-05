import React from "react";
import { config } from "../../../config";
import HeadTitle from "../../../components/HeadTitle";
import withAsideLayout from "../../../hoc/withAsideLayout";
import TomatoRate from "../../../components/TomatoRate";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
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
          <Controller
            control={control}
            name="estimatedTomato"
            render={({ onChange, value }) => (
              <TomatoRate handleClick={onChange} estimateRate={value} />
            )}
          />
        </div>
        <Button
          className={`${ROOT_CLASS}__form-submit-button`}
          type="submit"
          disabled={!formIsValid}
        >
          ADD TASK
        </Button>
      </form>
    </div>
  );
}

export default withAsideLayout(NewTask);
