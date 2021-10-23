class Todos {
  constructor(content) {
      this.id = new Date();
      this.content = content;
      this.completed = false;
  }
}

const addbtn = document.getElementById('addbtn');
const input = document.getElementById('item');

addbtn.addEventListener('click', () => {
  if (input.value != '' ) {
    let existingList = JSON.parse(localStorage.getItem('toDoList'));
    if (existingList == null) existingList = [];
    let list = new Todos(input.value);
    localStorage.setItem('todo', JSON.stringify(list));
    existingList.push(list);
    localStorage.setItem('toDoList', JSON.stringify(existingList));
    input.value = "";
  }
});

let lists = JSON.parse(localStorage.getItem('toDoList'));

const output = document.getElementById('addlist');

if (lists != null) {
  lists.forEach(list => {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    let checkbox = document.createElement('input')
    let label = document.createElement('label');

    checkbox.setAttribute('type', 'checkbox');

    label.textContent = list.content;

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