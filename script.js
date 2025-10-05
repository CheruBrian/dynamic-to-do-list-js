// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Define function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item (li)
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add functionality to remove the task when button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Step 3: Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Step 4: Allow adding tasks using the Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
