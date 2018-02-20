var todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
];

//todos[0].id = 3

// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]

//filter (실패)

// todos.filter(function (element) {
//     console.log(element);
//     return todos.id
// });

//[{ id: 3, content: 'HTML', completed: false } ]
//[{ id: 2, content: 'CSS', completed: true }]
//[{ id: 1, content: 'Javascript', completed: false }]

//map ()

// var toDo = todos.map(function (element) {
//     // console.log(element);
//     return element.id
// });
// console.log(toDo);


//map ()

// function getIds() {
//     return todos.map(function (todo) {
//         console.log(todo);
//         return todo.id;
//     });
// }
// var Ids = getIds();
// console.log(id)

//[{ id: 3, content: 'HTML', completed: false } ]
//[{ id: 2, content: 'CSS', completed: true }]
//[{ id: 1, content: 'Javascript', completed: false }]

// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3

// var arrNumMax = Math.max.apply(null, toDo);
// console.log(toDo);

//
// var arrMax = Math.max.apply(null, tdl);
// console.log(arrMax);

//Max
// function getMax() {
//     return Math.max.apply(null, ids);
// }
// console.log(getMax());

// //Min
// function getMin() {
//     return Math.min.apply(null, ids);
// }
// console.log(getMin());
//ids

// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라
// todos = [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

//unshift
//splice ()

//todos.unshift({ id: 4, content: 'Test', completed: false });

// [{ id: 4, content: 'Test', completed: false }].concat(todos);
// console.log(todos);

// function addTodo(newTodo) {
//     todos = [newTodo].concat(todos);
// }

// var newTodo = { id: 4, content: 'Test', completed: false };
// addTodo(newTodo);
// console.log(todos);

// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라

//filter

// var arrDel = todos.filter(function (element) {
//     console.log(element);
//     return element.id === 4
// });

// console.log(arrDel);

// var o = { id: 3, content: 'HTML', completed: false };

// todos = todos.filter(function (todo) {
//     return todo.id !== 4;
// })

// todos = todos.filter(function (todo) {
//     return todo.id !== 4; // id가 4가 아닌 요소를 반환
// })
// console.log(todos);

function removeTodoById(id) {
    todos.filter(function (todo) {
        return todo.id != id;
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

todos = todos.map(function (todo) {
//    if (todo.id === 3) {
//        Object.assign({}, todo, {completed: !todo/completed});
//    } else {
//        return todo
//    }

    return todo.id === 3 ? Object.assign({}, todo, { completed: !todo / completed }) : todo;
});

//reverse
var rev = todos.filter(function (todo) {
    return todo.id == 3
})
console.log(rev); //[ { id: 3, content: 'HTML', completed: false } ]

// rev = todos.reverse();
console.log(rev); //[ { id: 1, content: 'Javascript', completed: false },{ id: 2, content: 'CSS', completed: true },
//{ id: 3, content: 'HTML', completed: false } ]


// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: true }
// ];
//filter

// todos = todos.filter(function (todo) {
//     return todo.completed == true
// })
// console.log(naemless);

todos = todos.map(function (todo) {
    return Object.assign({}, todo, { completed: true });
})

// 7. todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라
//forEach > .count

todos.forEach(function (todo, index, array) {
    console.log(todo);
    total += todo;
    count ++;
});

console.log(total); // 25
console.log(todos.count)