// Utility function

// Generate Incomplete To-Do
function generateIncompleteTodo(taskName) {
  let listElement = document.createElement("li");
  listElement.classList.add("item");

  let inputElement = document.createElement("input");
  inputElement.setAttribute("type", "checkbox");
  inputElement.onchange = completeTask;

  let labelElement = document.createElement("label");
  labelElement.innerText = taskName;
  listElement.append(inputElement, labelElement);
  return listElement;
}

// Incomplete task
const todoInput = document.querySelector("form");
todoInput.addEventListener("submit", (event) => {
  event.preventDefault();

  let taskInput = document.querySelector("#new-task");
  let inputValue = taskInput.value;

  let listItemToAdd = generateIncompleteTodo(inputValue);
  let todoList = document.querySelector("#items");
  todoList.appendChild(listItemToAdd);

  taskInput.value = "";
});

//Generate Complete To-Do

function generateCompleteTodo(taskName) {
  let listElement = document.createElement("li");
  listElement.classList.add("item");
  listElement.innerText = taskName;

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = deleteTask;

  listElement.append(" ", deleteButton);
  return listElement;
}

// Complete task
function completeTask(e) {
  const checkbox = e.target;
  const taskItem = checkbox.parentElement;

  const label = taskItem.querySelector("label");
  const taskName = label.innerText;

  generateCompleteTodo(taskName);
  taskItem.parentNode.removeChild(taskItem);
  // taskItem.parentElement.removeChild(taskItem);
  // taskItem.remove();
  // const completedList = document.querySelector("#completed-items");
  // completedList.appendChild(generateCompleteTodo(taskName));

  document
    .querySelector("#completed-items")
    .appendChild(generateCompleteTodo(taskName));
}

// Delete task
deleteTask = (e) => {
  const deleteButton = e.target;
  const taskItem = deleteButton.parentElement;
  taskItem.parentElement.removeChild(taskItem);
};
