import {readFromLS, writeToLS} from './ls.js';
//  import * as uH from './utilities.js';

let todoList = [];

export default class Todos {
  constructor(id) {
    this.element = document.getElementById(id);
    this.key = id;
    this.error = document.querySelector('#error');
    todoList = getToDo(this.key);
  }
  showToDoList() {
    renderTodoList(this.element, todoList);
    this.addEventListeners();
  }
  addToDo() {
    this.error.innerHTML = '';
    const todo = document.querySelector('#item');
    if (todo.value === "") {
      this.error.innerHTML = "Please enter a to-do item";
      return;
    }
    saveTodo(todo, this.key);
    this.showToDoList();
  }
  addEventListeners() {
    const ls = Array.from(this.element.children);
    ls.forEach(item => {
      item.children[0].addEventListener('click', e => this.completeToDo(item.id));
      item.children[2].addEventListener('click', e => this.removeItem(item.id));
    });
  }
  completeToDo(itemId) {
    let task = todoList.findIndex(task => task.id == itemId);
    todoList[task].completed = !todoList[task].completed;
    writeToLS(this.key, todoList);
    markDone(itemId);
  }
  removeItem(itemId) {
    let task = todoList.findIndex(task => task.id == itemId);
    todoList.splice(task, 1);
    writeToLS(this.key, todoList);
    this.showToDoList();
  }
  filterToDos(category) {
    category = filterBy(category);
    const f = todoList.filter(task => (category != null) ? task.completed === category : task);
    renderTodoList(this.element, f);
    this.addEventListeners();
  }
  addTabListeners() {
    const actionButtons = Array.from(document.querySelectorAll('.tab'));
    actionButtons.forEach(tab => {
      tab.addEventListener('click', e => {
        for (let btn of actionButtons) {
          btn.classList.remove('selected-tab');
        }
        e.currentTarget.classList.add('selected-tab');
        this.filterToDos(e.currentTarget.id);
      });
    });
  }
}

function filterBy(category){
  switch(category){
      case 'active':      return  false;
      case 'complete':    return  true;
      case 'all':         return  null;
      default :           return  null;
  }
}

function getToDo(key) {
  let ls = readFromLS(key);
  return ls === null ? [] : ls;
}

function saveTodo(task, key) {
  let timestamp = Date.now();
  const todo = {id: timestamp, content: task.value, completed: false};
  todoList.push(todo);
  writeToLS(key, todoList);
  task.value = "";
  task.focus();
}

function renderTodoList(ul, list) {
  ul.innerHTML = "";

  list.forEach(taskObject => ul.innerHTML += renderOneToDo(taskObject));
  updateCount(list);
}

function renderOneToDo(task) {
  return `<li id="${task.id}" ${task.completed ? 'class="completed"' : ''}>
      <input name="${task.content}" type="checkbox" value="none" ${task.completed ? 'checked' : ''}>
      <p>${task.content}</p>
      <div class="delete">❌</div>
  </li>`;
}

function updateCount(ls){
  document.getElementById('taskstatus').innerHTML =  `${(ls != null) ? ls.length : 0}  tasks left`;
}

function markDone(itemId){
  document.getElementById(itemId).classList.toggle('completed');
}