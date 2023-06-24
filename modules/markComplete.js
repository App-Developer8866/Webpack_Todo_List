import updateStatus from './updateStatus.js';
import updateBookData from './updateBookData.js';

export const markComplete = (event, toDoList) => {
  const checkbox = event.target;

  const parent = checkbox.parentElement;
  parent.querySelector('.list-text').classList.add('underline');
  const label = parent.querySelector('label');
  label.classList.toggle('checked');
  const index = parent.parentElement.getAttribute('data-index');
  const listArr = updateStatus(index, true, toDoList);
  updateBookData(listArr);
};

export const markUnComplete = (event, toDoList) => {
  const checkbox = event.target;
  const parent = checkbox.parentElement;
  parent.querySelector('.list-text').classList.remove('underline');
  const label = parent.querySelector('label');
  label.classList.toggle('checked');
  const index = parent.parentElement.getAttribute('data-index');
  const listArr = updateStatus(index, false, toDoList);
  updateBookData(listArr);
};