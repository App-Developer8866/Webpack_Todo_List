import updateBookData from './updateBookData.js';

const editList = (index, value, toDoList) => {
  const updatedTasks = toDoList.filter((tasks) => {
    if (tasks.index === parseInt(index, 10)) {
      tasks.value = value;
      return true;
    }
    return true;
  });
  toDoList = updatedTasks;
  updateBookData(toDoList);
};

export default editList;