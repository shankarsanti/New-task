// Function to add a new task to the list
function addTask() {
    // 1. Get the value from the input field
        const taskInput = document.getElementById('task-input');
            const taskText = taskInput.value.trim(); // .trim() removes extra spaces

                // 2. Check if the input is not empty
                    if (taskText === "") {
                            alert("Please enter a task!");
                                    return; // Stop the function if empty
                                        }

                                            // 3. Create a new list item (<li>) and set its text
                                                const listItem = document.createElement('li');
                                                    listItem.textContent = taskText;

                                                        // Optional: Add an event listener to mark as done (toggles a style change)
                                                            listItem.addEventListener('click', function() {
                                                                    listItem.style.textDecoration = listItem.style.textDecoration === 'line-through' ? 'none' : 'line-through';
                                                                        });
                                                                            
                                                                                // 4. Find the list container (<ul>)
                                                                                    const todoList = document.getElementById('todo-list');

                                                                                        // 5. Append the new list item to the main list
                                                                                            todoList.appendChild(listItem);

                                                                                                // 6. Clear the input field for the next task
                                                                                                    taskInput.value = '';
                                                                                                    }
                                                                                                    