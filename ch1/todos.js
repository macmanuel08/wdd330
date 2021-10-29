import {readFromLS, writeToLS} from 'ls.js';
import {qs, onTouch} from 'utilities.js';

export default class Todos {
  constructor() {
    this.output = document.querySelector('#addlist');
    this.key = 'todo';
    this.data = document.querySelector('#item').value;
  }
  addTodo() {
    let task = this.data;
    saveTodo(task, this.key);
    let todos = getTodos(this.key);
    

    let button = qs('#addbtn');
  }
  listTodos() {
    
  }
}

let todoList = null;

function saveTodo(task, key) {
  let todo = {id: new Date(), content: task, completed: false};
  writeToLS(key, todo);
  todoList.push(todo);
}

function getTodos(key) {
  if (todoList == null) {
    let todos = readFromLS(key);
    return todos;
  }
}

let element = qs('#addlist');

function renderTodoList(list, element) {
  let output = qs(element);
  list.foreach(task => {
    
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    let checkbox = document.createElement('input')
    let label = document.createElement('label');

    checkbox.setAttribute('type', 'checkbox');

    label.textContent = task.content;

    checkbox.addEventListener('change', () => {

        if (checkbox.checked) {
            label.classList.add('completed');
        } else {
            label.classList.remove('completed');
        }
    });

    li.append(checkbox);
    li.append(label);

    

    deletebutton.textContent = '❌';

    li.append(deletebutton);
    
    deletebutton.addEventListener('click', () => {
        output.removeChild(li);
        input.focus;
    });
    input.value = '';
    input.focus;

    output.append(li);
  });
}