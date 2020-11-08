import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import { TaskListContext } from "../../../context";
import actions from "../../../context/taskLists/actions";
import { config } from "../../../config";
import HeadTitle from "../../../components/HeadTitle";
import Button from "../../../components/Button";
import TaskFrom from "../../../components/TaskFrom";
import withAsideLayout from "../../../hoc/withAsideLayout";
import TaskInfo from "../../../components/TaskInfo";

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
      timer: { currentId, isCountDown },
    },
    taskDispatch,
  } = useContext(TaskListContext);

  //handle from

  const onSubmit = (formData, e, resetForm) => {
    console.log(formData);
    const payload = { ...formData };
    taskDispatch(actions.updateTaskState(currentId, payload));
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
  }, [filter, visibleTask.length]);

  const getTaskDetailClassName = (index) => {
    const taskItemClassName = classNames({
      [`${ROOT_CLASS}__task-lists__task-item-detail`]: true,
      [`${ROOT_CLASS}__task-lists__task-item-detail__spread`]:
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
    if (isCountDown) return;
    const payload = { id };
    taskDispatch(actions.setCurrentTask(payload));
  };

  //render content

  const renderDetailContent = (task) => {
    switch (filter) {
      case "SHOW_UNDONE":
        return (
          <TaskFrom
            className={`${ROOT_CLASS}__task-lists__form`}
            defaultValues={{
              taskTitle: task.taskTitle,
              estimatedTomato: task.estimatedTomato,
            }}
            handleSubmit={onSubmit}
          />
        );
      case "SHOW_DONE":
        return (
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
              className={`${ROOT_CLASS}__form-button`}
            >
              REDO
            </Button>
          </div>
        );
      case "SHOW_ARCHIVE":
        return (
          <div className={`${ROOT_CLASS}__form-group`} data-flex="flex-row">
            <Button
              data-size="big"
              data-color="gray"
              data-radius="general"
              type="button"
              className={`${ROOT_CLASS}__form-button`}
            >
              ARCHIVE
            </Button>
          </div>
        );
      default:
        break;
    }
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
            className={`${ROOT_CLASS}__task-lists__task-item`}
            style={{ marginBottom: "1px" }}
            onClick={() => {
              handleSelectTask(task.id);
            }}
          >
            <TaskInfo
              className={`${ROOT_CLASS}__task-lists__task-item-info`}
              handelCLick={() => handleSpread(index)}
              isDone={task.isDone}
              isCurrent={task.id === currentId}
            >
              <HeadTitle headTag="h4">{task.taskTitle}</HeadTitle>
            </TaskInfo>
            <div className={getTaskDetailClassName(index)}>
              <div className={`${ROOT_CLASS}__task-lists__spread-content`}>
                {renderDetailContent(task)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAsideLayout(TaskLists);
