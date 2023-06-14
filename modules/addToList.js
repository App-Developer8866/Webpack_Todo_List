import updateBookData from './updateBookData.js';
import displayLists from './displayLists.js';

const addToList = (value, completed, index, toDoList) => {
  toDoList.push({ value, completed, index });
  updateBookData(toDoList);
  displayLists(toDoList);
  return toDoList;
};

export default addToList;