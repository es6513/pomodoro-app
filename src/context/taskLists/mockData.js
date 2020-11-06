import { v4 as uuidv4 } from "uuid";

const mockInitialState = {
  taskLists: new Array(10).fill(),
  timer: {
    currentId: "",
    isCountDown: false,
  },
};

mockInitialState.taskLists = mockInitialState.taskLists.map((el, index) => {
  const task = {
    id: uuidv4(),
    isArchived: Math.random() > 0.5 ? true : false,
    isDone: Math.random() > 0.5 ? true : false,
    isBreak: Math.random() > 0.5 ? true : false,
    taskTitle: String(index + 1),
    estimatedTomato: index + 1,
  };
  return task;
});

export default mockInitialState;
