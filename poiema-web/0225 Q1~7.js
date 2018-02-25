var todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
]

// console.log(todos[0].id)

// 1. todos읭 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]

function getIds() {
    var ids = todos.map(function(todo) {
        return todo.id;
    });
    return ids;
}
console.log(getIds());

// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
function getMax() {
    return Math.max.apply(null, getIds());
}
console.log(getMax());

function getMin() {
    return Math.min.apply(null, getIds());
}
console.log(getMin());

// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라

function addTodo() {
    var addTodo = [{id : 4, content: 'Test', completed: false}]
    .concat(todos);
    return addTodo;
}

console.log(addTodos());
console.log('');

// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라

function delTodos() {
    var delTodo = addTodos().filter(function(element) {
        return element.id !== 4
    })
    return delTodo;
}
console.log(delTodos());
console.log('');

// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
function revTodos() {
    var revTodo = delTodos().map(function (element) {
        return element.id === 3 ? Object.assign({}, element, { completed: !element.completed }) : element;
    })
    return revTodo;
}
console.log(revTodos());
console.log('');

// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라.

function allTodos() {
    var allTodo = delTodos().map(function (element) {
        return Object.assign({}, element, {completed: true});
    })
    return allTodo;
}
console.log(allTodo());
console.log('');

// 7. todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라

function cntTodos() {
    var cnt = 0;
    var cntTodo = allTodos().map(function(element) {
        if(element.completed === true) {
            cnt++;
        }
    })
    return cnt;
}

console.log(cntTodos());