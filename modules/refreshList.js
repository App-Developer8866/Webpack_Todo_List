import displayLists from './displayLists.js';

const refreshList = (toDoList) => {
  localStorage.removeItem('tasksList');
  toDoList.length = 0;
  displayLists(toDoList);
};

export default refreshList;