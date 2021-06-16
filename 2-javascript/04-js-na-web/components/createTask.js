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
  const schedule = date.format('HH:mm');

  const dateFormated = date.format("DD/MM/YYYY");
  const conclude = false;

  const datas = {
    valueInput,
    dateFormated,
    schedule,
    conclude
  };

  const tasksUpdated = [...tasks, datas];

  localStorage.setItem("tasks", JSON.stringify(tasksUpdated));

  input.value = " ";

  loadTask();
};

export const Task = ({ valueInput, schedule, conclude }, id) => {
  const task = document.createElement("li");

  const content = `<p class="content">${schedule} | ${valueInput}</p>`;

  conclude ? task.classList.add("done") : task.classList.add("task");

  task.innerHTML = content;

  task.appendChild(ButtonConclude(loadTask, id));
  task.appendChild(ButtonDelete(loadTask, id));

  return task;
};
