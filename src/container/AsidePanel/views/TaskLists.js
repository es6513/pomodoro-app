import React, { useContext } from "react";
import { TaskListContext } from "../../../context";
import { config } from "../../../config";
import HeadTitle from "../../../components/HeadTitle";
import Button from "../../../components/Button";

import withAsideLayout from "../../../hoc/withAsideLayout";

const { css } = config;
const { ROOT_CLASS } = css;

const switchNav = [
  {
    filter: "SHOW_ALL",
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

function TaskLists() {
  const { taskState, taskDispatch } = useContext(TaskListContext);

  console.log(taskState.taskLists);

  const handleSelectTask = (id) => {
    const payload = { id };
    const action = { type: "SET_CURRENT_TASK", payload };
    taskDispatch(action);
  };

  return (
    <div className={`${ROOT_CLASS}__aside-panel__task-lists`}>
      <HeadTitle>TASK LISTS</HeadTitle>
      <div className={`${ROOT_CLASS}__task-lists__switch-nav`}>
        {switchNav.map((nav) => (
          <Button
            key={nav.label}
            type="submit"
            data-size="small"
            data-color="gray"
            data-radius="upper"
            className={`${ROOT_CLASS}__task-lists__switch-nav-item`}
          >
            {nav.label}
          </Button>
        ))}
      </div>
      {taskState.taskLists.map((el) => (
        <p
          key={el.id}
          style={{ marginBottom: "20px" }}
          onClick={() => handleSelectTask(el.id)}
        >
          {el.taskTitle}
        </p>
      ))}
    </div>
  );
}

export default withAsideLayout(TaskLists);
