const createTask = (event) => {
  event.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  console.log(value);
}

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', createTask);