// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Step 1: Select important DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Define a function to add a new task
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // Step 3: Validate that input is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Step 4: Create a new list item for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Step 5: Create a remove button for each task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Step 6: Add click event to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Step 7: Append the remove button and task to the list
        listItem.appendChild(removeButton);
        taskList.appendChi
