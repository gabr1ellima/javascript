import ButtonConclude from "./concludeTask.js";
import ButtonDelete from "./deleteTask.js";

export const handleNewItem = (event) => {
  event.preventDefault();
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const value = input.value;

  const calendar = document.querySelector("[data-form-date]");
  const date = moment(calendar.value);
  const dateFormated = date.format("DD/MM/YYYY");

  const datas = {
    value,
    dateFormated
  };

  const tasksUpdated = [...tasks, datas];

  const createdTask = Task(datas);


  list.appendChild(createdTask);

  localStorage.setItem("tasks", JSON.stringify(tasksUpdated));

  input.value = " ";
};

export const Task = ({ value, dateFormated }) => {
  const task = document.createElement("li");
  task.classList.add("task");
  const content = `<p class="content">${dateFormated} | ${value}</p>`;

  task.innerHTML = content;

  task.appendChild(ButtonConclude());
  task.appendChild(ButtonDelete());

  return task;
};