import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskListContext } from "../../../context";
import { addTask } from "../../../context/taskLists/actions";
import withAsideLayout from "../../../hoc/withAsideLayout";
import { config } from "../../../config";
import HeadTitle from "../../../components/HeadTitle";
import TaskFrom from "../../../components/TaskFrom";

const { css } = config;
const { ROOT_CLASS } = css;

function NewTask() {
  const { taskDispatch } = useContext(TaskListContext);

  const defaultFromValues = {
    taskTitle: "",
    estimatedTomato: 1,
  };

  const onSubmit = (formData, e, resetForm) => {
    const task = {
      id: uuidv4(),
      isArchived: false,
      isDone: false,
      isBreak: false,
      ...formData,
    };
    taskDispatch(addTask(task));
    resetForm(defaultFromValues);
  };

  return (
    <div className={`${ROOT_CLASS}__aside-panel__new-task`}>
      <HeadTitle headTag="h1">ADD NEW TASK</HeadTitle>
      <TaskFrom defaultValues={defaultFromValues} handleSubmit={onSubmit} />
    </div>
  );
}

export default withAsideLayout(NewTask);
