const Addtask = () =>{
    let input = document.getElementById('input');
    let valText = document.createTextNode(input.value);
    let list = document.getElementById('list');
    var li = document.createElement('li');
    li.appendChild(valText)
    list.appendChild(li)
    input.value = ""; 
}


