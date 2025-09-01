let todoList = [
  { item: 'get milk', dueDate: '2026-08-04' },
  { item: 'go to sleep', dueDate: '2027-05-04' }
];

displayItems();

function addTodo() {
  console.log("Add button clicked");

  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;

  if (todoItem !== '' && todoDate !== '') {
    todoList.push({ item: todoItem, dueDate: todoDate });

    // clear inputs after adding
    inputElement.value = '';
    dateElement.value = '';
  }

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('#todo-list');
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <div class="todo-row">
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="deleteTodo(${i})">Delete</button>
      </div>
    `;
  }

  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}