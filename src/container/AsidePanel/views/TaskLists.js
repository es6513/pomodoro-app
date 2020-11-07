import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import { TaskListContext } from "../../../context";
import { config } from "../../../config";
import HeadTitle from "../../../components/HeadTitle";
import Button from "../../../components/Button";
import TaskFrom from "../../../components/TaskFrom";
import { getCurrentTask } from "../../util";
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

  const onSubmit = (formData, e, resetForm) => {
    console.log(formData);
    const payload = { ...formData };
    const action = { type: "UPDATE_TASK_STATE", id: currentId, payload };
    taskDispatch(action);
    resetForm(formData, { isDirty: false });
  };

  //handleVisibleTasks
  const [filter, setFilter] = useState(switchNav[0].filter);
  const visibleTask = getVisibleTask(taskLists, filter);
  const handleSwitchFilter = (filter) => {
    setFilter(filter);
  };

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

  //HandleSelectTask
  const handleSelectTask = (id) => {
    const payload = { id };
    const action = { type: "SET_CURRENT_TASK", payload };
    taskDispatch(action);
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
        {visibleTask.map((task, index) => (
          <div
            key={task.id}
            className={getTaskItemClassName(index)}
            style={{ marginBottom: "1px" }}
            onClick={() => {
              handleSelectTask(task.id);
            }}
          >
            <div
              className={`${ROOT_CLASS}__task-lists__task-item-info`}
              onClick={() => handleSpread(index)}
            >
              <HeadTitle headTag="h4">{task.taskTitle}</HeadTitle>
            </div>
            <div className={`${ROOT_CLASS}__task-lists__task-item-detail`}>
              <TaskFrom
                className={`${ROOT_CLASS}__task-lists__form`}
                defaultValues={{
                  taskTitle: task.taskTitle,
                  estimatedTomato: task.estimatedTomato,
                }}
                handleSubmit={onSubmit}
                currentTask={task}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAsideLayout(TaskLists);
