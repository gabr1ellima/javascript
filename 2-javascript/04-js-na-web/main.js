import { handleNewItem } from "./components/createTask.js";

const newTask = document.querySelector("[data-form-button]");

newTask.addEventListener("click", handleNewItem);
