import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskListContext } from "../../../context";
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
  taskTitle: "",
  estimatedTomato: 1,
};

function NewTask() {
  const { taskDispatch } = useContext(TaskListContext);
  const {
    register: formRegister,
    errors: formErrors,
    reset: resetForm,
    formState,
    control,
    handleSubmit,
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    defaultValues,
  });

  const { isValid: formIsValid } = formState;

  const onSubmit = (formData, e) => {
    const task = {
      id: uuidv4(),
      isArchived: false,
      isDone: false,
      isBreak: false,
      ...formData,
    };
    console.log(task);
    const action = { type: "ADD_TASK", payload: task };
    taskDispatch(action);
    resetForm(defaultValues);
  };

  return (
    <div className={`${ROOT_CLASS}__aside-panel__new-task`}>
      <HeadTitle headTag="h1">ADD NEW TASK</HeadTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${ROOT_CLASS}__form-group`}>
          <label htmlFor="taskTitle" className={`${ROOT_CLASS}__form-label`}>
            TASK TITLE
          </label>
          <Input
            data-size="big"
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
          data-size="big"
          data-color="primary"
          data-radius="general"
          data-layout="full"
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
