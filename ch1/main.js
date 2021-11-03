import Todos from './todos.js';

const todo = new Todos('tasklist');

window.addEventListener('load', () => {
  todo.showToDoList();
  todo.addTabListeners();
});

const nTask= document.getElementById('addbtn');
nTask.addEventListener('click', () =>  todo.addToDo());