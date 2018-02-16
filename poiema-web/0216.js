// 1-3
console.log('hello world'); //hello world

// 3-2 External JavaScript
// main.js
var heading = document.getElementById('heading');
var myButton = document.getElementById('my-btn');

myButton.addEventListener('click', function () {
    heading.innerHTML = 'Hello World!';
}); // (click : Hello World)

//3-5
var x = 5;
var y = 6;
var z = x + y;

console.log(z); //11

//
function sample(x, y) {
    return x + y;
}

//
if (x > 0) {
    //실행구문
}
//
for (var i = 0; i < 10; i++) {
    //실행구문
}
// control flow
var time = 10;
var greeting;

if (time < 10) {
    greeting = 'Good morning';
} else if (time < 20) {
    greeting = 'Good day';
} else {
    greeting = 'Good evening';
}
console.log(greeting); // Good day
// 표현식
5 * 10  // 50

'Javascript' + ' = ' + 'ECAMscript'//"Javascript = ECAMscript"
//
var x;
x = 6;
//
string str = "Hello world"
//literal : object
{name : 'lee', gender: 'male'}
//literal : array
['a', 'b', 'c'];

//
var foo = null // null
var var // undefined