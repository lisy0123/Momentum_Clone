const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement.parentNode;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const ul = document.createElement("ul");
    ul.id = newTodo.id;
    const liItem = document.createElement("li");
    liItem.classList.add("item");
    const liDelete = document.createElement("li");
    liDelete.classList.add("delete");
    liItem.innerText = newTodo.text;
    liDelete.innerHTML = `<i id="edit" class="far fa-trash-alt"></i>`;
    ul.appendChild(liItem);
    ul.appendChild(liDelete);
    toDoList.appendChild(ul);
    liDelete.addEventListener("click", deleteToDo);
}

function handleToDoSummit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSummit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
