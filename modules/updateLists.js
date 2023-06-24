import removeListitem from './removeListitem.js';
import displayLists from './displayLists.js';
import updateBookData from './updateBookData.js';

const updateLists = (toDoList) => {
  displayLists(toDoList);

  const removeTaskIcons = document.querySelectorAll('.list-icon');
  const handleRemoveTaskClick = (event) => {
    const listItem = event.target.closest('li');
    const index = listItem.getAttribute('data-index');
    const listArr = removeListitem(parseInt(index, 10), toDoList);
    updateBookData(listArr);
  };

  removeTaskIcons.forEach((removeTaskIcon) => {
    removeTaskIcon.removeEventListener('click', handleRemoveTaskClick);
    removeTaskIcon.addEventListener('click', handleRemoveTaskClick);
  });
};

export default updateLists;