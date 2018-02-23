var todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
];

//todos[0].id = 3

// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]

function getIds() {
    var ids = todos.map(function(todo) {
        return todo.id;
    });
    return ids;
}
console.log(getIds());

//map ()

// var todo = todos.map(function (element) {
//     // console.log(element);
//     return element.id
// });
// console.log(todo);

//map ()

function getIds() {
    var ids = todos.map(function (todo) {
        return todo.id;
    });
    return ids;
}
console.log(getIds());

//[{ id: 3, content: 'HTML', completed: false } ]
//[{ id: 2, content: 'CSS', completed: true }]
//[{ id: 1, content: 'Javascript', completed: false }]

// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3

// function getMaxValue () {
//     var arrNumMax = Math.max.apply(null, getIds());
//     return arrNumMax;
// }
// console.log(getMaxValue());

// var arrNumMax = Math.max.apply(null, toDo);
// console.log(toDo);

//
// var arrMax = Math.max.apply(null, tdl);
// console.log(arrMax);

//Max
function getMax() {
    return Math.max.apply(null, getIds());
}
console.log(getMax());

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

//todos.unshift({ id: 4, content: 'Test', completed: false });

// [{ id: 4, content: 'Test', completed: false }].concat(todos);
// console.log(todos);

function addTodos() {
    var addTodo = [{ id: 4, content: 'Test', completed: false }].concat(todos);
    return addTodo;
}
console.log(addTodos());
console.log('');

// function addTodo(newTodo) {
//     todos = [newTodo].concat(todos);
// }

// var newTodo = { id: 4, content: 'Test', completed: false };
// addTodo(newTodo);
// console.log(todos);

// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라

function delTodos() {
    var delTodo = addTodos().filter(function(element) {
        return element.id !== 4
    })
    return delTodo;
}
console.log(delTodos());
console.log('');
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

// function removeTodoById(id) {
//     todos.filter(function (todo) {
//         return todo.id != id;
//     });
// }
// removeTodoById(4);
// console.log(todos);

// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function revTodos() {
//     var revTodo = delTodos().map(function(element) {
//         if(element.id === 3) {
//            return Object.assign({}, element, {completed: !element.completed});
//         } else {
//             return element;
//         }
//     })
//     return revTodo;
// }
// console.log(revTodos());

function revTodos() {
    var revTodo = delTodos().map(function(element) {
        return element.id === 3 ? Object.assign({}, element, {completed: !element.completed}) : element;
    })
    return revTodo;
}
console.log(revTodos());
console.log('');
// todos = todos.map(function (todo) {
// //    if (todo.id === 3) {
// //        Object.assign({}, todo, {completed: !todo});
// //    } else {
// //        return todo
// //    }

//     return todo.id === 3 ? Object.assign({}, todo, { completed: !todo / completed }) : todo;
// });

// //reverse
// var rev = todos.filter(function (todo) {
//     return todo.id == 3
// })
// console.log(rev); //[ { id: 3, content: 'HTML', completed: false } ]

// // rev = todos.reverse();
// console.log(rev); //[ { id: 1, content: 'Javascript', completed: false },{ id: 2, content: 'CSS', completed: true },
// //{ id: 3, content: 'HTML', completed: false } ]


// // 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라
// // todos = [
// //   { id: 3, content: 'HTML', completed: true },
// //   { id: 2, content: 'CSS', completed: true },
// //   { id: 1, content: 'Javascript', completed: true }
// // ];

function allTodos() {
var allTodo = delTodos().map(function (element) {
    return Object.assign({}, element, {completed: true});
})
return allTodo;
}
console.log(allTodos());
console.log('');

// //filter

// // todos = todos.filter(function (todo) {
// //     return todo.completed == true
// // })
// // console.log(naemless);

// todos = todos.map(function (todo) {
//     return Object.assign({}, todo, { completed: true });
// })

// // 7. todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라
// //forEach > .count

function cntTodos() {
    var cnt = 0;
    var cntTodo = allTodos().map(function(element) {
        if(element.completed === true) {
            cnt++;
        }
        return;
    })
    return cnt;
}

console.log(cntTodos());

// console.log(total); // 25
// console.log(todos.count)