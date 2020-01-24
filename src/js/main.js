const toDoArray = [];

const input = document.querySelector('input');
const btnAdd = document.querySelector('button.add');
const btnRemove = document.querySelectorAll('button.remove');
const btnSearch = document.querySelector('button.search');
const ul = document.querySelector('ul');
const span = document.querySelector('p span');
const listTasks = document.getElementsByClassName('task');

const addTask = (e) => {
    e.preventDefault();
    const nameTask = input.value;
    if (nameTask === "") return;
    const li = document.createElement('li');
    li.className = 'task'
    ul.appendChild(li);
    li.innerHTML = `${nameTask} <button class="remove">Delete</button>`;
    input.value = '';
    toDoArray.push(li);
    ul.textContent = '';
    toDoArray.forEach((toDoElement, key) =>{
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
    li.querySelector('button.remove').addEventListener('click', removeTask);
    span.textContent = listTasks.length;
    console.log(toDoArray);
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoArray.splice(index);
    span.textContent = listTasks.length;
    console.log(toDoArray);
}

// const searchTask = (e) => {
//     const searchText = e.target.value.toLowerCase()
//     let tasks = [...listTasks];
//     tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText)) //Metoda includes() ustala czy dana tablica posiada szukany element, zwracając true lub false.
//     ul.textContent = '';
//     tasks.forEach( li => ul.appendChild(li))
// }

// btnSearch.addEventListener('click', searchTask);
btnAdd.addEventListener('click', addTask);

