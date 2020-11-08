import React, { useContext } from "react";
import { config } from "../../config";
import { TaskListContext } from "../../context";
import actions from "../../context/taskLists/actions";
import HeadTitle from "../../components/HeadTitle";
import Timer from "../../components/Timer";

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

  //show Task

  const getShowTask = () => {
    if (currentId) return taskLists.find((task) => task.id === currentId);
    else {
      const undoenTasks = taskLists.filter(
        (task) => !task.isDone && !task.isArchived
      );
      return undoenTasks.length > 0 ? undoenTasks[0] : null;
    }
  };

  const showedTask = getShowTask();

  //handleTime

  const handleUpdateTask = () => {
    const payload = { isDone: true };
    taskDispatch(actions.updateTaskState(currentId, payload));
  };

  return (
    <div className={`${ROOT_CLASS}__modal-timer`}>
      <div className={`${ROOT_CLASS}__modal-timer__content`}>
        {showedTask ? (
          <HeadTitle headTag="h1">{showedTask.taskTitle}</HeadTitle>
        ) : null}
        <Timer
          task={showedTask}
          className={`${ROOT_CLASS}__modal-timer__timer`}
        />
      </div>

      {/* {currentTask ? (
        <button type="button" onClick={handleUpdateTask}>
          Done
        </button>
      ) : null} */}
    </div>
  );
}

export default ModalTimer;
