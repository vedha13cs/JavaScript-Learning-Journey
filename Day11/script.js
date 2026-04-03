// Day 11: To-Do with Local Storage

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load tasks on page load
window.onload = function () {
    displayTasks();
};

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Enter a task!");
        return;
    }

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    displayTasks();
}

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerText = task;

        let btn = document.createElement("button");
        btn.innerText = "X";
        btn.classList.add("deleteBtn");

        btn.onclick = function () {
            deleteTask(index);
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}
