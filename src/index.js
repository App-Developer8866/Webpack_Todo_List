import './style.css';

const Tasks = document.querySelector('.tasks');

const tasks = [
  {
    index: 0,
    description: 'Any',
    completed: false,
  },
  {
    index: 1,
    description: 'Any1',
    completed: false,
  },
  {
    index: 2,
    description: 'Any2',
    completed: false,
  },
  {
    index: 3,
    description: 'Any3',
    completed: false,
  },
];

function listTasks() {
  tasks.forEach((i) => {
    Tasks.innerHTML += `<li>
    <input type="checkbox" onclick="checkBox(${i.index})"/>
    <div class="task">
      <input type="text" value="${i.description}" />
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
  </li>`;
  });
}

listTasks();