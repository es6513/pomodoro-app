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

function TaskForm({
  className,
  defaultValues,
  handleSubmit,
  handleArchiveLightBox,
  isCountDown,
  location,
}) {
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

  const page = location.pathname === "/add" ? "add" : "todo";

  const { isValid: formIsValid } = formState;

  const buttonDisabled = () => {
    if (page === "add") return !formIsValid;
    else {
      const { dirtyFields } = formState;
      return Object.keys(dirtyFields).length === 0;
    }
  };

  return (
    <form
      className={className}
      onSubmit={submitForm((data, e) => handleSubmit(data, e, resetForm))}
    >
      <div className={`${ROOT_CLASS}__form-group`} data-flex="flex-column">
        <label htmlFor="taskTitle" className={`${ROOT_CLASS}__form-label`}>
          TASK TITLE
        </label>
        <Input
          data-size="big"
          className={`${ROOT_CLASS}__form-input`}
          inputName="taskTitle"
          useFormRef={formRegister({
            validate: {
              trimmedValue: (value) => {
                if (value.trim().length === 0) {
                  return "This field is required.";
                }
                return true;
              },
            },
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
          disabled={buttonDisabled()}
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
            disabled={isCountDown}
            className={`${ROOT_CLASS}__form-button`}
            handleClick={() => handleArchiveLightBox()}
          >
            ARCHIVE
          </Button>
          <Button
            data-size="medium"
            data-color="primary"
            data-radius="general"
            type="submit"
            disabled={buttonDisabled() || isCountDown || !formIsValid}
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
  className: PropTypes.string,
  defaultValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleArchiveLightBox: PropTypes.func,
  isCountDown: PropTypes.bool,
  location: PropTypes.object.isRequired,
};

TaskForm.defaultProps = {
  className: "",
  handleUpdateTask: () => null,
  isCountDown: false,
};
