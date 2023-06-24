const updateStatus = (index, status, toDoList) => {
  const updatedTasks = toDoList.filter((tasks) => {
    if (tasks.index === parseInt(index, 10)) {
      tasks.completed = status;
      return true;
    }
    return true;
  });
  return updatedTasks;
};

export default updateStatus;