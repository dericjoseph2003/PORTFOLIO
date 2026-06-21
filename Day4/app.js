// Select elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Handle Add button click
addBtn.addEventListener("click", function () {
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter a task"); // validation
    return;
  }

  addTask(text);
  input.value = "";
  saveTasks();
});

// Add task function
function addTask(text, completed = false) {
  const li = document.createElement("li");
  li.textContent = text;

  if (completed) {
    li.classList.add("done");
  }

  // Toggle complete on click
  li.addEventListener("click", function () {
    li.classList.toggle("done");
    saveTasks();
  });

  // Delete button
  const del = document.createElement("button");
  del.textContent = "X";

  del.addEventListener("click", function (e) {
    e.stopPropagation(); // don't trigger the toggle
    li.remove();
    saveTasks();
  });

  li.appendChild(del);
  list.appendChild(li);
}

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];

  document.querySelectorAll("#taskList li").forEach(function (li) {
    const text = li.firstChild.textContent;

    tasks.push({
      text: text,
      completed: li.classList.contains("done")
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];

  saved.forEach(function (t) {
    addTask(t.text, t.completed);
  });
}

// Run when page loads
loadTasks();