const addbtn = document.getElementById('addbtn');
const input = document.getElementById('item');
const output = document.getElementById('addlist');

addbtn.addEventListener('click', () => {
    if (input.value != '' ) {
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        let checkbox = document.createElement('input')
        let label = document.createElement('label');

        checkbox.setAttribute('type', 'checkbox');

        label.textContent = input.value;

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
        output.append(li);
        deletebutton.addEventListener('click', () => {
            output.removeChild(li);
            input.focus;
        });
        input.value = '';
        input.focus;
    }
});