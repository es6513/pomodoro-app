import React, { useReducer } from "react";
import PropTypes from "prop-types";
import mockInitialState from "./mockData";
import actionTypes from "./actionTypes";

const reducer = (state, action) => {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case actionTypes.ADD_TASK: {
      return {
        ...state,
        taskLists: [...state.taskLists, action.payload],
      };
    }
    case actionTypes.UPDATE_TASK_STATE: {
      const { id, ...updateKey } = action.payload;
      const updatedTaskLists = state.taskLists.map((task) => {
        if (task.id === id) return { ...task, ...updateKey };
        return task;
      });
      console.log("first", updatedTaskLists);
      return {
        ...state,
        taskLists: updatedTaskLists,
      };
    }
    case actionTypes.SET_CURRENT_TASK: {
      const { id } = action.payload;
      console.log("second", state.taskLists);

      return {
        ...state,
        timer: { ...state.timer, currentId: id },
      };
    }
    case actionTypes.SET_IS_COUNT_DOWN: {
      const { isCountDown } = action.payload;
      return {
        ...state,
        timer: { ...state.timer, isCountDown },
      };
    }
    case actionTypes.SET_IS_BREAK: {
      const { id, isBreak } = action.payload;
      const updatedTaskLists = state.taskLists.map((task) => {
        if (task.id === id) return { ...task, isBreak };
        return task;
      });
      return {
        ...state,
        taskLists: updatedTaskLists,
      };
    }
    case actionTypes.SET_WORK_TIME: {
      const { id, workTime } = action.payload;
      const updatedTaskLists = state.taskLists.map((task) => {
        if (task.id === id) return { ...task, workTime };
        return task;
      });
      return {
        ...state,
        taskLists: updatedTaskLists,
      };
    }
    case actionTypes.SET_BREAK_TIME: {
      const { id, breakTime } = action.payload;
      const updatedTaskLists = state.taskLists.map((task) => {
        if (task.id === id) return { ...task, breakTime };
        return task;
      });
      return {
        ...state,
        taskLists: updatedTaskLists,
      };
    }
    default:
      return state;
  }
};

export const TaskListContext = React.createContext({});

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
