const todoForm = document.getElementById("todoform");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("list-container");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(e);
  const text = todoInput.value;
  // console.log(text==='');
  // console.log(todoInput);

  if (text === "") {
    alert("Please enter a todo!!");
    return;
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = text;
    todoList.appendChild(listItem);

    const deleteButton = document.createElement("delbtn");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delbtn");

    deleteButton.onclick = function () {
      listItem.classList.add("deleting");
      setTimeout(() => {
        todoList.removeChild(listItem);
      }, 300); // Timeout matches CSS transition duration
    };

    listItem.appendChild(deleteButton);

    listItem.onmouseover = function () {
      listItem.classList.add("show-delete");
    };

    listItem.onmouseout = function () {
      listItem.classList.remove("show-delete");
    };

    updateListBackground();
  }

  todoInput.value = "";
});

todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.classList.contains("delbtn")) {
    e.target.parentNode.classList.add("deleting");
    setTimeout(() => {
      e.target.parentNode.remove();
      updateListBackground();
    }, 300); // Timeout matches CSS transition duration
  }
});

function updateListBackground() {
  if (todoList.children.length > 0) {
    todoList.style.background = "rgba(255, 255, 255, 0.2)";
    todoList.style.backdropFilter = "blur(10px)";
  } else {
    todoList.style.background = "none";
    todoList.style.backdropFilter = "none";
  }
}
