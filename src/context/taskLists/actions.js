import actionTypes from "./actionTypes";

//task
export const addTask = (payload) => {
  return {
    type: actionTypes.ADD_TASK,
    payload,
  };
};

export const updateTaskState = (payload) => {
  console.log(payload);
  return {
    type: actionTypes.UPDATE_TASK_STATE,
    payload,
  };
};

export const setCurrentTask = (payload) => {
  return {
    type: actionTypes.SET_CURRENT_TASK,
    payload,
  };
};

//timer
export const setIsCountDown = (payload) => {
  return {
    type: actionTypes.SET_IS_COUNT_DOWN,
    payload,
  };
};

export const setIsBreak = (payload) => {
  return {
    type: actionTypes.SET_IS_BREAK,
    payload,
  };
};

export const setWorkTime = (payload) => {
  return {
    type: actionTypes.SET_WORK_TIME,
    payload,
  };
};

export const setBreakTime = (payload) => {
  return {
    type: actionTypes.SET_BREAK_TIME,
    payload,
  };
};

const actionCreators = {
  addTask,
  updateTaskState,
  setCurrentTask,
  setIsCountDown,
  setIsBreak,
  setWorkTime,
  setBreakTime,
};

export default actionCreators;
