export const getCurrentTask = (currentId, taskLists) => {
  return currentId ? taskLists.find((task) => task.id === currentId) : null;
};
