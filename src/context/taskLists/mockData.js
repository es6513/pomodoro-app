import { v4 as uuidv4 } from "uuid";
import { timeConstants } from "./utils";

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
    isBreak: true,
    taskTitle: "Task" + String(index + 1),
    estimatedTomato: index + 1,
    estimatedWorkTime: (index + 1) * timeConstants.oneUnitWorkSeconds,
    workTime: 1498,
    breakTime: 298,
    finishTomato: 0,
  };
  return task;
});

export default mockInitialState;
