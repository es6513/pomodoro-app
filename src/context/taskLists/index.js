import React, { useReducer } from "react";
import PropTypes from "prop-types";
import mockInitialState from "./mockData";
import actionTypes from "./actionTypes";
console.log(actionTypes);
export const TaskListContext = React.createContext({});

// const initialState = {
//   taskLists: [],
//   timer: {
//     currentId: "",
//     isCountDown: false,
//   },
// };
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        ...state,
        taskLists: [...state.taskLists, action.payload],
      };
    }
    case "UPDATE_TASK_STATE": {
      const { id } = action;
      const updatedTaskLists = state.taskLists.map((task) => {
        if (task.id === id) return { ...task, ...action.payload };
        return task;
      });
      return {
        ...state,
        taskLists: updatedTaskLists,
      };
    }
    case "SET_CURRENT_TASK": {
      const { id } = action.payload;
      return {
        ...state,
        timer: { ...state.timer, currentId: id },
      };
    }
    default:
      return state;
  }
};

export const TaskListProvider = ({ children }) => {
  const [taskState, taskDispatch] = useReducer(reducer, mockInitialState);

  const taskListsContext = {
    taskState,
    taskDispatch,
  };

  return (
    <TaskListContext.Provider value={taskListsContext}>
      {children}
    </TaskListContext.Provider>
  );
};

export const { Consumer: TaskListConsumber } = TaskListContext;

TaskListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
