const toDoArray = [];

const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const span = document.querySelector('h4 span');
const listTasks = document.getElementsByClassName('task');

const addTask = (e) => {
    e.preventDefault();
    const nameTask = input.value;
    if (nameTask === "") return;
    const li = document.createElement('li');
    li.className = 'task'
    ul.appendChild(li);
    li.innerHTML = `${nameTask}<button class="remove"><i class="fa fa-trash-o"></i></button>`;
    input.value = '';
    toDoArray.push(li);
    toDoArray.forEach((toDoElement, key) =>{
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
    span.textContent = listTasks.length;
    li.querySelector('button').addEventListener('click', removeTask);
    console.log(toDoArray);
}

const removeTask = () => {
    toDoArray.splice(index)

}

const searchTask = () => {

}

form.addEventListener('submit', addTask);

