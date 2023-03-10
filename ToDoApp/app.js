let taskInput = document.getElementById("new-task-input");
let addButton = document.getElementById("add-task-button");
let taskUl = document.getElementById("task-ul");
let i = 1;
function addTask() {
    if (taskInput.value !== "") {
        let li = document.createElement("li");
        let taskSpan = document.createElement("span");
        taskSpan.textContent =  `${i}. ${taskInput.value}`;
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        taskUl.appendChild(li);
        taskInput.value = "";
        deleteButton.onclick = removeTask;
		i++;
    }
}
function removeTask() {
    this.parentNode.remove();
}
addButton.onclick = addTask;