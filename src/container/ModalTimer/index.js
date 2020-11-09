import React, { useContext, useEffect, useState } from "react";
import { config } from "../../config";
import { TaskListContext } from "../../context";
import actions from "../../context/taskLists/actions";
import HeadTitle from "../../components/HeadTitle";
import Timer from "../../components/Timer";
import Button from "../../components/Button";

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

  //show Task

  const getShowTask = () => {
    if (currentId) return taskLists.find((task) => task.id === currentId);
    return null;
  };

  const showedTask = getShowTask();

  //handleUpdateTask

  const { isDone, isBreak, isArchived } = showedTask;
  const [localTask, setLocalTask] = useState(showedTask);

  useEffect(() => {
    const undoneTasks = taskLists.filter(
      (task) => !task.isDone && !task.isArchived
    );
    const payload = { id: undoneTasks[0].id };
    taskDispatch(actions.setCurrentTask(payload));
  }, [isDone, isArchived]);
  //handleTimerBehavior

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

  const handleUpdateTask = (payload) => {
    taskDispatch(actions.updateTaskState(payload));
  };

  const handleDoneTask = () => {
    const payload = { id: currentId, isDone: true };
    handleUpdateTask(payload);
    console.log(taskLists);
  };

  return (
    <div className={`${ROOT_CLASS}__modal-timer`}>
      <div className={`${ROOT_CLASS}__modal-timer__content`}>
        {showedTask ? (
          <HeadTitle headTag="h1">{showedTask.taskTitle}</HeadTitle>
        ) : null}
        {isBreak ? (
          <div className={`${ROOT_CLASS}__modal-timer__break-label`}>BREAK</div>
        ) : null}
        <Timer
          task={showedTask}
          className={`${ROOT_CLASS}__modal-timer__timer`}
          isCountDown={isCountDown}
          handleCountDown={handleCountDown}
          handleBreak={handleBreak}
          handleWorkTIme={handleWorkTIme}
          handleBreakTIme={handleBreakTIme}
          handleUpdateTask={handleUpdateTask}
        />
      </div>
      <Button
        type="button"
        className={`${ROOT_CLASS}__undone-button`}
        disabled={isCountDown}
        handleClick={handleDoneTask}
      >
        TASK COMPLETE
      </Button>

      <footer>POMODORO</footer>
    </div>
  );
}

export default ModalTimer;
