import ButtonConclude from "./concludeTask.js";
import ButtonDelete from "./deleteTask.js";
import { loadTask } from "./loadTask.js";

export const handleNewItem = (event) => {
  event.preventDefault();
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const input = document.querySelector("[data-form-input]");
  const valueInput = input.value;

  const calendar = document.querySelector("[data-form-date]");
  const date = moment(calendar.value);

  const dateFormated = date.format("DD/MM/YYYY");

  const datas = {
    valueInput,
    dateFormated,
  };

  const tasksUpdated = [...tasks, datas];

  localStorage.setItem("tasks", JSON.stringify(tasksUpdated));

  input.value = " ";

  loadTask();
};

export const Task = ({ valueInput, dateFormated }) => {
  const task = document.createElement("li");
  task.classList.add("task");
  const content = `<p class="content">${dateFormated} | ${valueInput}</p>`;

  task.innerHTML = content;

  task.appendChild(ButtonConclude());
  task.appendChild(ButtonDelete());

  return task;
};
