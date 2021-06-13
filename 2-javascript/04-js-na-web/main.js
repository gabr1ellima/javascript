import ButtonConclude from "./components/concludeTask.js";
import ButtonDelete from "./components/deleteTask.js";

const handleNewItem = (event) => {
  event.preventDefault();
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const value = input.value;

  const calendar = document.querySelector("[data-form-date]");
  const date = moment(calendar.value);
  const dateFormated = date.format("DD/MM/YYYY");

  const datas = {
    value,
    dateFormated,
  };

  const createdTask = createTask(datas);

  list.appendChild(createdTask);
  input.value = "";
};

const createTask = ({ value, dateFormated }) => {
  const task = document.createElement("li");
  task.classList.add("task");
  const content = `<p class="content">${dateFormated} | ${value}</p>`;

  task.innerHTML = content;

  task.appendChild(ButtonConclude());
  task.appendChild(ButtonDelete());

  return task;
};

const newTask = document.querySelector("[data-form-button]");

newTask.addEventListener("click", handleNewItem);
