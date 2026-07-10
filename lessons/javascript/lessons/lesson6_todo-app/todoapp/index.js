let input = document.getElementById('todoInput');
let list = document.getElementById('todoList');
let addBtn = document.getElementById('addBtn');

//todos
let todos = (JSON.parse(localStorage.getItem('todos'))) || [];

function saveTodos() {
    localStorage
        .setItem('todos', JSON.stringify(todos));
}

function addTodo() {
    let value = input.value;
    if (value) {
        todos.push(value);
        saveTodos()
        input.value = '';
        renderTodos();
    }

}


// addBtn.onclick = addTodo();
addBtn.addEventListener('click', addTodo);

function renderTodos() {

    list.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        let li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `<span>${todo}</span>
                        <button class="remove-btn" onclick="removeTodo(${i})">x</button>

`
        list.appendChild(li);
    }

}

renderTodos();


function removeTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

function listener(event) {

    if (event.key === 'Enter') {
        addTodo();

    }

}

input.addEventListener('keydown', listener);
