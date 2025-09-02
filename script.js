// Elementos principales
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Función para agregar una tarea
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Escribe una tarea antes de agregar.");
    return;
  }

  // Crear elemento li
  const li = document.createElement("li");

  // Contenedor de la tarea
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Texto de la tarea
  const span = document.createElement("span");
  span.textContent = taskText;

  // Acción al marcar checkbox
  checkbox.addEventListener("change", () => {
    span.classList.toggle("completed");
  });

  // Botón eliminar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Construir el li
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(span);
  li.appendChild(taskDiv);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  // Limpiar input
  taskInput.value = "";
}

// Evento botón
addBtn.addEventListener("click", addTask);

// Evento Enter
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});