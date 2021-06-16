const concludeTask = (updateTask, id) => {
  const registeredTasks = JSON.parse(localStorage.getItem('tasks'));

  registeredTasks[id].conclude = !registeredTasks[id].conclude;

  localStorage.setItem('tasks', JSON.stringify(registeredTasks));

  updateTask();
};

const ButtonConclude = (updateTask, id) => {
  const buttonConclude = document.createElement("button");

  buttonConclude.classList.add("check-button");
  buttonConclude.innerText = "Concluir";

  buttonConclude.addEventListener("click", () =>
  concludeTask(updateTask, id));

  return buttonConclude;
};

export default ButtonConclude;
