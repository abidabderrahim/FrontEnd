let input = document.querySelector('.input');
let btn = document.querySelector('.add');
let tasks = document.querySelector('.tasks');
let tasksArray = [];

if (localStorage.getItem('tasks')){
    tasksArray = JSON.parse(localStorage.getItem('tasks'));
}

getlocaldata();

btn.addEventListener('click', () =>{
    if (input.value !== ""){
        addTaskToArray(input.value);
        input.value = "";
    }
});

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('del')){
        delteTask(e.target.parentElement.getAttribute('data-id'));
        /* remove element from page .*/
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains('task')){
        toggeltask(e.target.getAttribute('data-id'));
        e.target.classList.toggle("done")
    }
});

function addTaskToArray(taskText){
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
    };
    tasksArray.push(task);
    addtasksArray(tasksArray);
    dataStorage(tasksArray);
    /*
    console.log(JSON.stringify(tasksArray))
    [{"id":1699194349307,
    "title":"asc",
    "completed":false}]
    convert javascript object or array
    to javascript object Notation.
    */
}

function addtasksArray (tasksArray){
    tasks.textContent = "";
    tasksArray.forEach((task) => {
        let div = document.createElement('div');
        div.className = "task";
        if (task.completed){
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        let span = document.createElement("span");
        span.className = 'del';
        span.appendChild(document.createTextNode("Delete"));
        div.appendChild(span);
        tasks.appendChild(div);
    });
}

function dataStorage(tasksArray){
    window.localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

function getlocaldata(){
    let data = window.localStorage.getItem('tasks');
    if (data){
        let tasks = JSON.parse(data);
        addtasksArray(tasks);
    }
}

function delteTask(taskId){
    tasksArray = tasksArray.filter((task) => task.id != taskId);
    dataStorage(tasksArray);
}

function toggeltask(taskId){
    for (let i=0; i< tasksArray.length; i++){
        if (tasksArray[i].id == taskId){
            tasksArray[i].completed == false ? (tasksArray[i].completed = true) : (tasksArray[i].completed = false);
        }
    }
    dataStorage(tasksArray);
}