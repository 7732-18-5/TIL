//DOM QUERY 하나의 요소 노드 선택

//1. document.getElementById(id)
var elem = document.getElementById('one')
elem.className = 'blue';

console.log(elem);
console.log(elem.__proto__);

//2. document.querySelector(cssSelector)
var elem = document.querySelector('li.red');
elem.className = 'blue';

//DOM Query 여러개의 요소 노드 선택

//3. document.getElementsByClassName(class)
var elems = document.getElementsByClassName('red');
for (var i = 0; i < elems.length; i++) {
    elems[i].className = 'blue';
}
//0209.html 2번째 li#two는 변경되지 않는다.

//3-1. 해결방안 - 역방향
var elems = document.getElementsByClassName('red');
for (var i = elems.length - 1; i >= 0; i--) {
    elems[i].className = 'blue';
}
//3-2. 무한반복
var elems = document.getElementsByClassName('red');
var i = 0;
while (elems.length > i) {
    elems[i].className = 'blue';
}

//3-3. HTMLCollection
var elems = document.getElementsByClassName('red');

// 유사배열을 배열로 변환
var arr = [].slice.call(elems);

console.log(arr);
// [li#one.red, li#two.red, li#three.red]
// 각 요소는 HTMLLIElement

for (var i = 0; arr.length > 0; i++) {
    arr[i].className = 'blue';
}

//3-4 IE8+ NodeList(non-live)
// querySelectorAll는 Nodelist(non-live)를 반환한다.
var elems = document.querySelectorAll('.red');
for (var i = 0; i < elems.length; i++) {
    elems[i].className = 'blue';
}

//3-5. HTMLCollection을 반환한다.
var elems = document.getElementsByTagName('li');
for (var i = 0; i < elems.length; i++) {
    elems[i].className = 'blue';
}

//3-6. // Nodelist를 반환한다.
var elems = document.querySelectorAll('li.red');

for (var i = 0; i < elems.length; i++) {
    elems[i].className = 'blue';
}

//DOM Traversing

//parentNode
var elem = document.querySelector('#two');

var parentNode = elem.parentNode;
parentNode.className = 'blue';

//firstChild, lastChild
var elem = document.querySelector('ul');
// var elem = document.getElementsByTagName('ul')[0];

elem.firstChild.className = 'blue'; // first Child
elem.lastChild.className = 'blue'; // last Child
// 작동되지 않는다. IE를 제외한 대부분의 웹브라우져 엔진에서는 요소사이의 enter, tap을 텍스트노드로 간주한다.

//hasChildNodes()
//childNodes
var elem = document.querySelector('ul');
console.log(elem); // ul

if (elem.hasChildNodes()) {
    console.log(elem.childNodes);
    // HTML의 공백을 제거하지 않은 경우
    // NodeList(9) [text, li#one.red, text, li#two.red, text, li#three.red, text, li#four, text]
    // HTML의 공백을 제거한 경우
    // NodeList(4) [li#one.red, li#two.red, li#three.red, li#four]

    elem.childNodes[1].className = 'blue';
}
//previousSibling, nextSibling
var elem = document.querySelector('ul');
console.log(elem.childNodes);
// HTML의 공백을 제거한 경우
// NodeList(4) [li#one.red, li#two.red, li#three.red, li#four]

elem.firstChild.className = 'blue'; // first Child
elem.firstChild.nextSibling.className = 'blue'; // 2nd Child
elem.lastChild.previousSibling.className = 'blue'; // 3nd Child
elem.lastChild.className = 'blue'; // last Child