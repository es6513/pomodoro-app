import actionTypes from "./actionTypes";

export const addTask = (payload) => {
  return {
    type: actionTypes.ADD_TASK,
    payload,
  };
};

export const updateTaskState = (id, payload) => {
  return {
    type: actionTypes.UPDATE_TASK_STATE,
    id,
    payload,
  };
};

export const setCurrentTask = (payload) => {
  return {
    type: actionTypes.SET_CURRENT_TASK,
    payload,
  };
};

const actionCreators = { addTask, updateTaskState, setCurrentTask };

export default actionCreators;
