import React, { useReducer } from "react";
import PropTypes from "prop-types";

export const TaskListContext = React.createContext({});

const initialState = {
  taskLists: [],
  timer: {
    currentId: "",
    isCountDown: false,
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        taskLists: [...state.taskLists, action.payload],
      };
    default:
      return state;
  }
};

export const TaskListProvider = ({ children }) => {
  const [taskState, taskDispatch] = useReducer(reducer, initialState);

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
