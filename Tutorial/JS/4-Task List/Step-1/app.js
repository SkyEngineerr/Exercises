//Define UI Variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

console.log(form, clearBtn, filter, taskInput);
console.log(taskList);

//Load all event listeners
loadEventListeners();

// Defining the function that Load all event listeners
function loadEventListeners() {
    //Add Task Event
    form.addEventListener('submit', addTask)
};

//Add Task Event Handler
function addTask(e){
    e.preventDefault();
    
    let li = document.createElement('li')
    li.appendChild(document.createTextNode('Eren'))
    let a = document.createElement('a')
    li.appendChild(a)

    taskList.appendChild(li)
}