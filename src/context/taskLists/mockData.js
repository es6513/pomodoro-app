import { v4 as uuidv4 } from "uuid";

const mockInitialState = {
  taskLists: new Array(5).fill(),
  timer: {
    currentId: "",
    isCountDown: false,
  },
};

mockInitialState.taskLists = mockInitialState.taskLists.map((el, index) => {
  const task = {
    id: uuidv4(),
    isArchived: false,
    isDone: false,
    isBreak: false,
    taskTitle: String(index + 1),
    estimatedTomato: index + 1,
  };
  return task;
});

export default mockInitialState;
