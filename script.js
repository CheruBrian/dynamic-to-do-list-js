// script.js
// Persisted To-Do List using localStorage
document.addEventListener('DOMContentLoaded', function () {

  // DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // In-memory tasks array (keeps sync with localStorage)
  let tasks = [];

  // Save tasks array to localStorage
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Render the tasks array into the DOM
  function renderTasks() {
    taskList.innerHTML = ''; // clear current list

    tasks.forEach((taskText, idx) => {
      const listItem = document.createElement('li');

      // text node for the task
      const textSpan = document.createElement('span');
      textSpan.textContent = taskText;

      // remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';

      // When clicked, remove this task from tasks array and update storage + UI
      removeButton.addEventListener('click', function () {
        tasks.splice(idx, 1);   // remove by index
        saveTasks();            // persist updated array
        renderTasks();          // re-render to update indices
      });

      // assemble list item
      listItem.appendChild(textSpan);
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
    });
  }

  // Add a new task and optionally save it to localStorage
  function addTask(taskText) {
    taskText = (taskText || '').trim();
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    tasks.push(taskText); // update in-memory array
    saveTasks();          // persist change
    renderTasks();        // update UI
    taskInput.value = ''; // clear input
  }

  // Load tasks from localStorage when page loads
  function loadTasks() {
    try {
      const stored = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks = Array.isArray(stored) ? stored : [];
    } catch (e) {
      tasks = [];
    }
    renderTasks();
  }

  // Event listeners
  addButton.addEventListener('click', function () {
    addTask(taskInput.value);
  });

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask(taskInput.value);
    }
  });

  // Initialize app
  loadTasks();
});
