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
      timer: { currentId, isCountDown },
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

  //handleUpdateTask

  //handleTimerBehavior

  console.log(actions);

  const handleCountDown = (isCountDown) => {
    const payload = { isCountDown };
    taskDispatch(actions.setIsCountDown(payload));
  };

  const handleBreak = (payload) => {
    taskDispatch(actions.setIsBreak(payload));
  };

  const handleWorkTIme = (payload) => {
    taskDispatch(actions.setWorkTime(payload));
  };

  const handleBreakTIme = (payload) => {
    taskDispatch(actions.setBreakTime(payload));
  };

  const handleUpdateTask = () => {
    const payload = { isDone: true };
    taskDispatch(actions.updateTaskState(currentId, payload));
  };
  const handleTaskUpdate = (payload) => {
    taskDispatch(actions.updateTaskState(payload));
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
          isCountDown={isCountDown}
          handleCountDown={handleCountDown}
          handleBreak={handleBreak}
          handleWorkTIme={handleWorkTIme}
          handleBreakTIme={handleBreakTIme}
          handleTaskUpdate={handleTaskUpdate}
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
