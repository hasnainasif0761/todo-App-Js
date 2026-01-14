const Addtask = () => {

    let input = document.getElementById('input');
    let list = document.getElementById('list');

    if (input.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    // Create li
    let li = document.createElement('li');
    li.className = 'box';

    // Task text
    let text = document.createTextNode(input.value);
    li.appendChild(text);

    // Delete icon
    let icon = document.createElement('i');
    icon.className = 'ri-delete-bin-line';

    icon.onclick = () => {
        li.remove();
    };

    li.appendChild(icon);
    list.appendChild(li);

    input.value = '';
};
