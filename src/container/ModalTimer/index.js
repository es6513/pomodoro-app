import React, { useContext, useEffect, useMemo } from "react";
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

  const handleTaskUpdate = (payload) => {
    console.log("done task");
    taskDispatch(actions.updateTaskState(payload));
  };

  const selectNextTask = () => {
    console.log(taskLists);
    const undoneTasks = taskLists.filter(
      (task) => !task.isDone && !task.isArchived
    );
    const payload = { id: undoneTasks[0].id };
    taskDispatch(actions.setCurrentTask(payload));
  };

  const handleDoneTask = () => {
    const payload = { id: currentId, isDone: true };
    handleTaskUpdate(payload);
    selectNextTask();
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
          handleTaskUpdate={handleDoneTask}
        />
      </div>
      <Button
        type="button"
        className={`${ROOT_CLASS}__undone-button`}
        disabled={isCountDown}
        handleCLick={handleDoneTask}
      >
        TASK COMPLETE
      </Button>

      <footer>POMODORO</footer>
    </div>
  );
}

export default ModalTimer;
