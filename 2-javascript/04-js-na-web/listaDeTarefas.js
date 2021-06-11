(() => {
  const createTask = (event) => {
    event.preventDefault();
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const task = document.createElement("li");
  
    task.classList.add("task");
  
    const content = `<p class="content">${value}</p>`;
  
    task.innerHTML = content;
  
    task.appendChild(ButtonConclude());
    list.appendChild(task);
  
    input.value = "";
  };
  
  const newTask = document.querySelector("[data-form-button]");
  
  newTask.addEventListener("click", createTask);
  
  const ButtonConclude = () => {
    const buttonConclude = document.createElement("button");
  
    buttonConclude.classList.add("check-button");
    buttonConclude.innerText = 'Concluir'
  
    buttonConclude.addEventListener("click", concludeTask);
  
    return buttonConclude;
  };
  
  const concludeTask = (event) => {
    const buttonConclude = event.target;
  
    const taskComplete = buttonConclude.parentElement;
  
    taskComplete.classList.toggle('done')
  };
})();
