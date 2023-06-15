import updateStatus from './updateStatus.js';

const markUnComplete = (event, toDoList) => {
  const checkbox = event.target;
  const parent = checkbox.parentElement;
  parent.querySelector('.list-text').classList.remove('underline');
  const label = parent.querySelector('label');
  label.classList.toggle('checked');
  const index = parent.parentElement.getAttribute('data-index');
  updateStatus(index, false, toDoList);
};

export default markUnComplete;