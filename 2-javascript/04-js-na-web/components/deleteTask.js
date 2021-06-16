const ButtonDelete = () => {
  const buttonDelete = document.createElement("button");

  buttonDelete.classList.add("check-button");

  buttonDelete.innerText = "Deletar";
  buttonDelete.addEventListener('click', deleteTask);
  
  return buttonDelete;
};

const deleteTask = (event) => {
  const buttonDelete = event.target;

  const taskComplete = buttonDelete.parentElement;

  taskComplete.remove();

  return buttonDelete;
}

export default ButtonDelete;