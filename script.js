const todoForm = document.getElementById('todoform');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('list-container');

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(e);
    const text = todoInput.value;
    // console.log(text==='');
    // console.log(todoInput);

    if (text === '') {
        alert('Please enter a todo!!');
        return;
    }
    else {
        const listItem = document.createElement("li");
        listItem.textContent = text;
        todoList.appendChild(listItem);
        
        const deleteButton = document.createElement("delbtn");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = function () {
            todoList.removeChild(listItem);
        }

        listItem.appendChild(deleteButton);
    }

    todoInput.value = '';
})

    todoList.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      } else if (e.target.tagName === "delbtn") {
        e.target.parentNode.remove();
      }
    });