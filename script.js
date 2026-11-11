const taskInput = document.querySelector(".taskInput");
const addTaskBtn = document.querySelector(".addTaskBtn");
const taskFilter = document.querySelector(".taskFilter");
const taskList = document.querySelector(".taskList");
const taskAmount = document.querySelector(".taskAmount");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskCount() {
  taskAmount.textContent = `Number of tasks: ${tasks.length}`;
}

function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter(function (task) {
    if (taskFilter.value === "Active") {
      return !task.completed;
    }

    if (taskFilter.value === "Completed") {
      return task.completed;
    }

    return true;
  });

  if (filteredTasks.length === 0) {
    const li = document.createElement("li");

    if (tasks.length === 0) {
      li.textContent = "No tasks yet. Add your first task!";
    } else {
      li.textContent = "No tasks match this filter.";
    }

    taskList.appendChild(li);
    return;
  }

  filteredTasks.forEach(function (task) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", function () {
      task.completed = checkbox.checked;
      saveTasks();
      renderTasks();
      updateTaskCount();
    });

    const taskText = document.createElement("p");
    taskText.textContent = task.text;
    taskText.classList.toggle("completed", task.completed);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      tasks = tasks.filter(function (item) {
        return item.id !== task.id;
      });

      saveTasks();
      renderTasks();
      updateTaskCount();
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();

  taskInput.value = "";

  renderTasks();
  updateTaskCount();
}

updateTaskCount();
renderTasks();

addTaskBtn.addEventListener("click", addTask);
taskFilter.addEventListener("change", renderTasks);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
