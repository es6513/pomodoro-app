import { v4 as uuidv4 } from "uuid";
import { timeConstants } from "./utils";

const firstUuid = uuidv4();

const mockInitialState = {
  taskLists: new Array(5).fill(),
  timer: {
    currentId: firstUuid,
    isCountDown: false,
  },
};

mockInitialState.taskLists = mockInitialState.taskLists.map((el, index) => {
  const task = {
    id: index === 0 ? firstUuid : uuidv4(),
    isArchived: false,
    isDone: false,
    isBreak: false,
    taskTitle: "Task" + String(index + 1),
    estimatedTomato: index + 1,
    estimatedWorkTime: (index + 1) * timeConstants.oneUnitWorkSeconds,
    workTime: 1495,
    breakTime: 298,
    finishTomato: 0,
  };
  return task;
});

export default mockInitialState;
