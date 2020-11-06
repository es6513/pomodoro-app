import React, { useContext, useState } from "react";
import classNames from "classnames";
import { TaskListContext } from "../../../context";
import { config } from "../../../config";
import HeadTitle from "../../../components/HeadTitle";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

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
  const [filter, setFilter] = useState(switchNav[0].filter);
  const visibleTask = getVisibleTask(taskLists, filter);

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
            className={`${ROOT_CLASS}__task-lists__task-item`}
            style={{ marginBottom: "1px" }}
            onClick={() => handleSelectTask(el.id, index)}
          >
            <div className={`${ROOT_CLASS}__task-lists__task-item-info`}>
              <HeadTitle headTag="h4">{el.taskTitle}</HeadTitle>
            </div>
            <div className={`${ROOT_CLASS}__task-lists__task-item-detail`}>
              <form className={`${ROOT_CLASS}__task-lists__form`}>
                <div className={`${ROOT_CLASS}__form-group`}>
                  <label
                    htmlFor="taskTitle"
                    className={`${ROOT_CLASS}__form-label`}
                  >
                    TASK TITLE
                  </label>
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
