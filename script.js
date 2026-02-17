const TASKS_KEY = "todo_tasks";

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskTemplate = document.getElementById("task-item-template");

let tasks = loadTasks();
renderTasks();

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({
    id: crypto.randomUUID(),
    text,
    completed: false,
  });

  saveTasks();
  renderTasks();
  taskForm.reset();
  taskInput.focus();
});

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const item = taskTemplate.content.firstElementChild.cloneNode(true);
    const checkbox = item.querySelector(".task-toggle");
    const taskText = item.querySelector(".task-text");
    const deleteButton = item.querySelector(".delete-btn");

    checkbox.checked = task.completed;
    taskText.textContent = task.text;
    item.classList.toggle("completed", task.completed);

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      saveTasks();
      item.classList.toggle("completed", task.completed);
    });

    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((currentTask) => currentTask.id !== task.id);
      saveTasks();
      renderTasks();
    });

    taskList.appendChild(item);
  });
}

function loadTasks() {
  const raw = localStorage.getItem(TASKS_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (task) =>
        typeof task.id === "string" &&
        typeof task.text === "string" &&
        typeof task.completed === "boolean"
    );
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}
