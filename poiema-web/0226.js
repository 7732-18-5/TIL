let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]

function getIds() {
  return todos.map(function (todo) {
    return todo.id;
  });
}

console.log(getIds());

// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3

function getMaxId() {
  return Math.max.apply(null, getIds());
}

console.log(getMaxId());

function getMinId() {
  return Math.min.apply(null, getIds());
}

console.log(getMinId());

// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라
// todos = [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

function addTodo(newTodo) {
  // todos.unshift({ id: 4, content: 'Test', completed: false });
  // todos = [{ id: 4, content: 'Test', completed: false }, ...todos];
  todos = [newTodo].concat(todos);
}

addTodo({ id: 4, content: 'Test', completed: false });
console.log(todos);

// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

function removeTodoById(id) {
  todos = todos.filter(function (todo) {
    return todo.id !== id;
  });
}
removeTodoById(4);
console.log(todos);

// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

function toggleCompletedById(id) {
  todos = todos.map(function (todo) {
    return todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
  });
}

toggleCompletedById(3);
console.log(todos);

// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: true }
// ];

function toggleCompletedAll() {
  todos = todos.map(function (todo) {
    return Object.assign({}, todo, { completed: true });
  });
}

toggleCompletedAll();
console.log(todos);

// 7. todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라

function countCompletedTodos() {
  return todos.filter(function (todo) {
    return todo.completed;
  }).length;
}

console.log(countCompletedTodos());