import React, { useContext } from "react";
import { config } from "../../config";
import { TaskListContext } from "../../context";

const { css } = config;
const { ROOT_CLASS } = css;

function ModalTimer() {
  const {
    taskState: {
      taskLists,
      timer: { currentId },
    },
    taskDispatch,
  } = useContext(TaskListContext);

  console.log(currentId);

  const getCurrentTask = () => {
    return currentId ? taskLists.find((task) => task.id === currentId) : null;
  };

  const currentTask = getCurrentTask();

  const handleUpdateTask = () => {
    const payload = { isDone: true };
    const action = { type: "UPDATE_TASK_STATE", id: currentId, payload };
    taskDispatch(action);
  };

  return (
    <div className={`${ROOT_CLASS}__modal-timer`}>
      {currentTask ? currentTask.taskTitle : null}
      {currentTask ? (
        <button type="button" onClick={handleUpdateTask}>
          Done
        </button>
      ) : null}
    </div>
  );
}

export default ModalTimer;
