import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useForm, Controller } from "react-hook-form";
import { config } from "../../config";
import TomatoRate from "../../../components/TomatoRate";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { withRouter } from "react-router";

const { css } = config;
const { ROOT_CLASS } = css;

function TaskForm(props) {
  const { defaultValues, handleSubmit, currentTask, pagePath } = props;
  const {
    register: formRegister,
    errors: formErrors,
    reset: resetForm,
    formState,
    control,
    handleSubmit: submitForm,
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    defaultValues,
  });

  const { isValid: formIsValid } = formState;

  return (
    <form onSubmit={submitForm(handleSubmit)}>
      <div className={`${ROOT_CLASS}__form-group`} data-flex="flex-column">
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
      <div className={`${ROOT_CLASS}__form-group`} data-flex="flex-column">
        <label className={`${ROOT_CLASS}__form-label`}>ESTIMATED TOMATO</label>
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
  );
}

TaskForm.propTypes = {
  defaultValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  currentTask: PropTypes.object.isRequired,
  pagePath: PropTypes.string.isRequired,
};
