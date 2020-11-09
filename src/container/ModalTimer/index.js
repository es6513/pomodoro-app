import React, { useContext } from "react";
import { config } from "../../config";
import { TaskListContext } from "../../context";
import actions from "../../context/taskLists/actions";
import HeadTitle from "../../components/HeadTitle";
import Timer from "../../components/Timer";
import Button from "../../components/Button";
import Circle from "../../components/Circle";
import TomatoColor from "../../assets/icons/tomato_small_color.svg";
import Complete from "../../assets/icons/complete.svg";

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

  //handleUpdateTask

  const handleSelectNextTask = () => {
    const undoneTasks = taskLists
      .filter((task) => !task.isDone && !task.isArchived)
      .filter((task) => task.id !== currentId);
    if (undoneTasks.length) {
      const payload = { id: undoneTasks[0].id };
      taskDispatch(actions.setCurrentTask(payload));
    } else {
      const payload = { id: null };
      taskDispatch(actions.setCurrentTask(payload));
    }
  };

  const handleDoneTask = () => {
    const payload = { id: currentId, isDone: true };
    handleUpdateTask(payload);
    handleSelectNextTask();
  };

  //handle Render

  const renderContent = (showedTask) => {
    if (showedTask) {
      return (
        <div className={`${ROOT_CLASS}__modal-timer__content`}>
          <HeadTitle headTag="h1">{showedTask.taskTitle}</HeadTitle>
          {showedTask.isBreak ? (
            <div className={`${ROOT_CLASS}__modal-timer__break-label`}>
              BREAK
            </div>
          ) : (
            <div className={`${ROOT_CLASS}__modal-timer__circle`}>
              <Circle
                className={`${ROOT_CLASS}__circle`}
                data-size="big"
                estimatedTomato={showedTask.estimatedTomato}
                finishTomato={showedTask.finishTomato}
              />
            </div>
          )}
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
          <Button
            type="button"
            disabled={isCountDown}
            handleClick={handleDoneTask}
            className={`${ROOT_CLASS}__undone-button`}
          >
            TASK COMPLETE
            <img alt="complete" src={Complete} />
          </Button>
        </div>
      );
    } else {
      return (
        <div
          className={`${ROOT_CLASS}__modal-timer__content ${ROOT_CLASS}__modal-timer__content--empty`}
        >
          <div className={`${ROOT_CLASS}__modal-timer__empty-tomato`}>
            <HeadTitle headTag="h2">PODOMORO</HeadTitle>
            <img alt="emptyTomato" src={TomatoColor} />
          </div>
          <div className={`${ROOT_CLASS}__modal-timer__empty-text`}>
            You don’t have any task now,
            <br /> please add task first!
          </div>
        </div>
      );
    }
  };

  return (
    <div className={`${ROOT_CLASS}__modal-timer`}>
      {renderContent(showedTask)}
      <footer>POMODORO</footer>
    </div>
  );
}

export default ModalTimer;
