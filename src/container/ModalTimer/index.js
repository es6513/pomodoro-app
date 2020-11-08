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

  const handleUpdateTask = () => {
    const payload = { isDone: true };
    taskDispatch(actions.updateTaskState(currentId, payload));
  };

  //handleTimerBehavior

  const handleCountDown = (isCountDown) => {
    const payload = { isCountDown };
    taskDispatch(actions.setIsCountDown(payload));
  };

  const handleBreak = (isBreak) => {
    const payload = { isBreak };
    taskDispatch(actions.setIsBreak(payload));
  };

  const handleWorkTIme = (id, workTIme) => {
    const payload = { id, workTIme };
    taskDispatch(actions.setWorkTime(payload));
  };

  const handleBreakTIme = (id, breakTime) => {
    const payload = { id, breakTime };
    taskDispatch(actions.setBreakTime(payload));
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
