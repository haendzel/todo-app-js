const toDoArray = [];
const completeArray = [];
const trashArray = [];

const inputSearch = document.querySelector('input.magnifier');
const inputTodo = document.querySelector('input.todo')
const btnAdd = document.querySelector('button.add');
const ul = document.querySelector('ul');
const spanToDo = document.querySelector('p span');
const spanTrash = document.querySelector('p.trash span');
const listTasks = document.getElementsByClassName('task');
const spanComplete = document.querySelector('p.completed span');

const addTask = (e) => {
    e.preventDefault(); //przydatne, tajemnicze powoduje ze nie odswieza strona
    const nameTask = inputTodo.value;
    if (nameTask === "") return;
    const li = document.createElement('li');
    li.className = 'task'
    ul.appendChild(li);
    li.innerHTML = `<input class="checkbox" type="checkbox"> ${nameTask} <button class="remove">Delete</button>`;
    inputTodo.value = '';
    toDoArray.push(li); 
    ul.textContent = '';
    toDoArray.forEach((toDoElement, key) =>{
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
    li.querySelector('button.remove').addEventListener('click', removeTask);
    spanToDo.textContent = listTasks.length;
    li.querySelector('input.checkbox').addEventListener('click', completedTask);
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key; //index to bedzie event - cel - rodzic bięzacego elementu - generuje data - klucz
    trashArray.push(index);
    toDoArray.splice(index);
    spanToDo.textContent = listTasks.length;
    spanTrash.textContent = trashArray.length;
}

const searchTask = (e) => {
    e.preventDefault();
    const searchText = e.target.value.toLowerCase()
    let tasks = [...toDoArray]; //zwraca HTMLCOLLECTION []
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText)) //includes() zwraca true albo false, filter() tworzy nowa tablice - trzeba by to wbić do głowy
    ul.textContent = '';
    tasks.forEach( task => ul.appendChild(task))
}

const completedTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    completeArray.push(index);
    toDoArray.splice(index);
    spanToDo.textContent = listTasks.length;
    spanComplete.textContent = completeArray.length;
}

inputSearch.addEventListener('input', searchTask); 
btnAdd.addEventListener('click', addTask); 

