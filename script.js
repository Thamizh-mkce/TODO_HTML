document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTask);

    inputElement.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = inputElement.value.trim();
        if (taskText === '') {
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = () => todoList.removeChild(li);

        li.appendChild(deleteButton);
        todoList.appendChild(li);

        inputElement.value = '';
    }
});
