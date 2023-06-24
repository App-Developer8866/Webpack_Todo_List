const editList = (index, value, toDoList) => {
  const updatedTasks = toDoList.filter((tasks) => {
    if (tasks.index === parseInt(index, 10)) {
      tasks.value = value;
      return true;
    }
    return true;
  });
  return updatedTasks;
};

export default editList;