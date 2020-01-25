const toDoArray = [];
const completeArray = [];
const trashArray = [];

const inputSearch = document.querySelector('input.magnifier');
const inputTodo = document.querySelector('input.todo')
const btnAdd = document.querySelector('button.add');
const btnRemove = document.querySelectorAll('button.remove');
const ul = document.querySelector('ul');
const spanToDo = document.querySelector('p span');
const spanTrash = document.querySelector('p.trash span');
const listTasks = document.getElementsByClassName('task');

const addTask = (e) => {
    e.preventDefault();
    const nameTask = inputTodo.value;
    if (nameTask === "") return;
    const li = document.createElement('li');
    li.className = 'task'
    ul.appendChild(li);
    li.innerHTML = `<input type="checkbox"> ${nameTask} <button class="remove">Delete</button>`;
    inputTodo.value = ''; //reset inputTodo
    toDoArray.push(li);
    ul.textContent = '';
    toDoArray.forEach((toDoElement, key) =>{
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
    li.querySelector('button.remove').addEventListener('click', removeTask);
    spanToDo.textContent = listTasks.length;
    console.log(toDoArray);
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    trashArray.push(index);
    toDoArray.splice(index);
    spanToDo.textContent = listTasks.length;
    spanTrash.textContent = trashArray.length;
    console.log(toDoArray);
}

const searchTask = (e) => {
    e.preventDefault()
    const searchText = e.target.value.toLowerCase()
    let tasks = [...listTasks];
    tasks = tasks.filter(liItem => liItem.textContent.toLowerCase().includes(searchText))
    tasks.forEach( liItem => ul.appendChild(liItem))
}

inputSearch.addEventListener('input', searchTask);
btnAdd.addEventListener('click', addTask);

