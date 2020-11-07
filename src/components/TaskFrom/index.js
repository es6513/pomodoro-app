import React from "react";
import { PropTypes } from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { config } from "../../config";
import TomatoRate from "../TomatoRate";
import Input from "../Input";
import Button from "../Button";
import { withRouter } from "react-router";

const { css } = config;
const { ROOT_CLASS } = css;

function TaskForm(props) {
  const { defaultValues, handleSubmit, currentTask = {}, location } = props;
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

  console.log(location);

  const page = location.pathname === "/add" ? "add" : "todo";

  const { isValid: formIsValid } = formState;

  return (
    <form onSubmit={submitForm((data, e) => handleSubmit(data, e, resetForm))}>
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
      {page === "add" ? (
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
      ) : (
        <div className={`${ROOT_CLASS}__form-group`} data-flex="flex-row">
          <Button
            data-size="medium"
            data-color="gray"
            data-radius="general"
            type="button"
            className={`${ROOT_CLASS}__form-button`}
          >
            ARCHIVE
          </Button>
          <Button
            data-size="medium"
            data-color="primary"
            data-radius="general"
            type="submit"
            disabled={!formIsValid}
            className={`${ROOT_CLASS}__form-button`}
          >
            SAVE
          </Button>
        </div>
      )}
    </form>
  );
}

export default withRouter(TaskForm);

TaskForm.propTypes = {
  defaultValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  currentTask: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
