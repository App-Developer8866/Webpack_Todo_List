import updateBookData from './updateBookData.js';

const removeListitem = (index, toDoList) => {
  toDoList = toDoList.filter((task) => task.index !== parseInt(index, 10));

  toDoList = toDoList.map((task, index) => {
    task.index = index + 1;
    return task;
  });
  updateBookData(toDoList);
  return toDoList;
};

export default removeListitem;