const deleteTask = (updateTask, id) => {
  const index = id;
  const registeredTasks = JSON.parse(localStorage.getItem('tasks'));
  registeredTasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(registeredTasks));

  updateTask();
}

const ButtonDelete = (updateTask, id) => {
  const buttonDelete = document.createElement("button");

  buttonDelete.classList.add("check-button");

  buttonDelete.innerText = "Deletar";
  buttonDelete.addEventListener('click', () => deleteTask(updateTask, id));

  return buttonDelete;
};

export default ButtonDelete;