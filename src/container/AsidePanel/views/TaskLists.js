import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import { TaskListContext } from "../../../context";
import { config } from "../../../config";
import HeadTitle from "../../../components/HeadTitle";
import Button from "../../../components/Button";
import TomatoRate from "../../../components/TomatoRate";
import Input from "../../../components/Input";
import { useForm, Controller } from "react-hook-form";

import withAsideLayout from "../../../hoc/withAsideLayout";

const { css } = config;
const { ROOT_CLASS } = css;

const switchNav = [
  {
    filter: "SHOW_UNDONE",
    label: "TO DO",
  },
  {
    filter: "SHOW_DONE",
    label: "DONE",
  },
  {
    filter: "SHOW_ARCHIVE",
    label: "ARCHIVE",
  },
];

const getVisibleTask = (taskLists, filter) => {
  switch (filter) {
    case "SHOW_UNDONE":
      return taskLists.filter((task) => !task.isDone && !task.isArchived);
    case "SHOW_DONE":
      return taskLists.filter((task) => task.isDone);
    case "SHOW_ARCHIVE":
      return taskLists.filter((task) => task.isArchived);
    default:
      return taskLists;
  }
};

function TaskLists() {
  const {
    taskState: {
      taskLists,
      timer: { currentId },
    },
    taskDispatch,
  } = useContext(TaskListContext);

  //handle from

  const defaultValues = {
    taskTitle: "",
    estimatedTomato: 1,
  };

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

  const [filter, setFilter] = useState(switchNav[0].filter);
  const visibleTask = getVisibleTask(taskLists, filter);

  //handleAccordion

  const [isTaskSpread, setIsTaskSpread] = useState(false);
  const [spreadId, setSpreadId] = useState(null);
  useEffect(() => {
    setSpreadId(null);
  }, [filter]);

  const getTaskItemClassName = (index) => {
    const taskItemClassName = classNames({
      [`${ROOT_CLASS}__task-lists__task-item`]: true,
      [`${ROOT_CLASS}__task-lists__task-item__spread`]:
        index === spreadId && isTaskSpread,
    });
    return taskItemClassName;
  };

  const handleSpread = (index) => {
    if (index === spreadId) setIsTaskSpread((prevState) => !prevState);
    else if (index !== spreadId && isTaskSpread) {
      setSpreadId(index);
    } else if (index !== spreadId && !isTaskSpread) {
      setIsTaskSpread(true);
      setSpreadId(index);
    }
  };

  const handleSelectTask = (id, index) => {
    const payload = { id };
    const action = { type: "SET_CURRENT_TASK", payload };
    taskDispatch(action);
  };

  const handleSwitchFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className={`${ROOT_CLASS}__aside-panel__task-lists-wrapper`}>
      <HeadTitle headTag="h1">TASK LISTS</HeadTitle>
      <div className={`${ROOT_CLASS}__task-lists__switch-nav`}>
        {switchNav.map((nav) => (
          <Button
            key={nav.label}
            type="submit"
            data-size="small"
            data-color={nav.filter === filter ? "primary" : "gray-nav"}
            data-radius="upper"
            className={`${ROOT_CLASS}__task-lists__switch-nav-item`}
            handleCLick={() => handleSwitchFilter(nav.filter)}
          >
            {nav.label}
          </Button>
        ))}
      </div>
      <div className={`${ROOT_CLASS}__task-lists__task-lists`}>
        {visibleTask.map((el, index) => (
          <div
            key={el.id}
            className={getTaskItemClassName(index)}
            style={{ marginBottom: "1px" }}
            onClick={() => handleSelectTask(el.id, index)}
          >
            <div
              className={`${ROOT_CLASS}__task-lists__task-item-info`}
              onClick={() => handleSpread(index)}
            >
              <HeadTitle headTag="h4">{el.taskTitle}</HeadTitle>
            </div>
            <div className={`${ROOT_CLASS}__task-lists__task-item-detail`}>
              <form className={`${ROOT_CLASS}__task-lists__form`}>
                <div
                  className={`${ROOT_CLASS}__form-group `}
                  data-flex="flex-column"
                >
                  <label
                    htmlFor="taskTitle"
                    className={`${ROOT_CLASS}__form-label`}
                  >
                    TASK TITLE
                  </label>
                  <Input
                    data-size="small"
                    className={`${ROOT_CLASS}__form-input`}
                    inputName="taskTitle"
                    useFormRef={formRegister({
                      required: "This field is required.",
                    })}
                    errors={formErrors}
                  />
                </div>
                <div
                  className={`${ROOT_CLASS}__form-group`}
                  data-flex="flex-column"
                >
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
                <div
                  className={`${ROOT_CLASS}__form-group`}
                  data-flex="flex-row"
                >
                  <Button
                    data-size="small"
                    data-color="gray"
                    data-radius="general"
                    type="submit"
                    className={`${ROOT_CLASS}__form-button`}
                  >
                    ARCHIVE
                  </Button>
                  <Button
                    data-size="small"
                    data-color="primary"
                    data-radius="general"
                    type="submit"
                    disabled={!formIsValid}
                    className={`${ROOT_CLASS}__form-button`}
                  >
                    SAVE
                  </Button>
                </div>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAsideLayout(TaskLists);
