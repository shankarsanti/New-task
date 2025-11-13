        function addTodo() {
            const taskInput = document.getElementById
             ('task-input');
             const tasklist = document.getElementById('tasklist');
            const task = taskInput.value;
            if (task) {
                const taskList = document.getElementById('tasklist');
                const listItem = document.createElement('li');
                listItem.textContent = task;
                taskList.appendChild(listItem);
                taskInput.value = '';
            } else {
                alert('Please enter a task.');
            }
        }
