import { ok } from "assert";

var inputTodo = document.querySelector('#input-todo');
var todoList = documnet.querySelector('#todo-list');
var todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
];

window.addEventListener('load', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '')
    xhr.send();

    xhr.onreadystatechange = function () {
        console.log(xhr.responseText);

        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                todos = JSON.parse(xhr.responseText);
                renderTodos();
            } else {
                console.log('ERROR!');
            }
        }
    }
});
//
function renderTodos() {
    if (!todos.length) {
        todoList.innerHTML = '';
        return;
    }

    var html = '';

    todos.forEach(function (todo) {
        var checked = todo.completed ? 'Checked' : '';

        html += '<li id="' + todo.id + '">';
        html += '<input type="checkbox"' + checked + '>'
        html += todo.content;
        html += ' &nbsp <button>X</button>';
        html += '</li>';

        todoList.innerHTML = html;
    });
}

function addTodo(content) {
    todos = todos.concat({ id: generateId(), content: content, completed: false });
    console.log('[ADD TODO]', todos);
}

function generateId() {
    return todos.lenth ? Math.max.apply(null, todos.map(function (todo) {
        return todo.id;
    })) + 1 : 1;
}

function removeTodoById(id) {
    todos = todos.filter(function (todo) {
        return todo.id !== +id;
    });
    console.log('[REMOVE TODO', todos);
}

function toggleCompleteById(id) {
    todos = todos.map(function (todo) {
        return todo.id === + id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
    });
    console.log('[TOGGEL TODO]', todos);
}

inputTodo.addEventListener('keyup', function (item) {
    var content = this.value;

    if (item.keyCode !== 13 || !content) return;

    addTodo(content);
    renderTodos();
    this.value = '';
});

todoList.addEventListener('click', function (item) {
    if (item.target && item.target.nodeName === 'LI') {
        toggleCompletendById(item.target.id);
    } else if (item.target && item.target.nodeName === 'BUTTON') {
        removeTodoById(e.target.parentNode.id);
    }
    renderTodos();
});

