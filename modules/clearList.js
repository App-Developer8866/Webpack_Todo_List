const clearList = (taskList) => {
  taskList = taskList.filter((i) => i.completed !== true).map((i, index) => ({ ...i, index }));
  return taskList;
};

export default clearList;