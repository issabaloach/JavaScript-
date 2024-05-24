const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

const addTask = () => {
  if (taskInput.value.trim() === '') {
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('flex', 'justify-between', 'items-center', 'mb-2');

  const taskLabel = document.createElement('label');
  taskLabel.classList.add('flex-1', 'text-white');
  taskLabel.textContent = taskInput.value.trim();

  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.classList.add('mr-2', 'text-lg');
  taskCheckbox.addEventListener('change', () => {
    if (taskCheckbox.checked) {
      taskLabel.classList.add('line-through');
    } else {
      taskLabel.classList.remove('line-through');
    }
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('bg-red-500', 'hover:bg-red-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  const editBtn = document.createElement('button');
  editBtn.classList.add('bg-orange-500', 'hover:bg-orange-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'ml-2');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    const editText = prompt('Edit task:', taskLabel.textContent);
    if (editText) {
      taskLabel.textContent = editText;
    }
  });

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteBtn);
  taskItem.appendChild(editBtn);

  taskList.appendChild(taskItem);

  taskInput.value = '';
  taskInput.focus();
};

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTask();
  }
});