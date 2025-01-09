// script.js
document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskType = prompt("Enter task type (urgent/non-urgent):").toLowerCase();
    const taskName = prompt("Enter task name:");

    if (taskType === 'urgent') {
        addTask('urgent-tasks', taskName);
    } else if (taskType === 'non-urgent') {
        addTask('non-urgent-tasks', taskName);
    } else {
        alert("Invalid task type!");
    }
});

function addTask(listId, taskName) {
    const list = document.getElementById(listId);
    const listItem = document.createElement('li');
    listItem.textContent = taskName;
    listItem.addEventListener('click', () => {
        document.getElementById('completed-tasks').appendChild(listItem);
    });
    list.appendChild(listItem);
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message has been sent!");
    e.target.reset();
});
