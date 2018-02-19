//[DOM QUERY 하나의 요소 노드 선택]

//1. document.getElementById(id)
var elem = document.getElementById('one')
elem.className = 'blue';

console.log(elem);
console.log(elem.__proto__);

//2. document.querySelector(cssSelector)
var elem = document.querySelector('li.red');
elem.className = 'blue';

//[DOM Query 여러개의 요소 노드 선택]

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

//[DOM Traversing]

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

//[DOM Manipulation]

//nodeValue 텍스트 노드에의 접근/수정

    // 해당 텍스트 노드의 부모 요소 노드를 선택한다.
var one = document.getElementById('one');
console.dir(one); // HTMLLIElement: li#one.red

    // nodeName, nodeType을 통해 노드의 정보를 취득할 수 있다.
console.log(one.nodeName); // LI
console.log(one.nodeType); // 1: Element node

    // firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색한다.
var textNode = one.firstChild;

    // nodeName, nodeType을 통해 노드의 정보를 취득할 수 있다.
console.log(textNode.nodeName); // #text
console.log(textNode.nodeType); // 3: Text node

    // nodeValue 프로퍼티를 사용하여 노드의 값을 취득한다.
console.log(textNode.nodeValue); // Seoul

    // nodeValue 프로퍼티를 이용하여 텍스트를 수정한다.
textNode.nodeValue = 'Pusan';

// 어트리뷰트 노드에의 접근/수정

//className

var elems = document.querySelectorAll('li');

for (var i = 0; i < elems.length; i++) {
    // class 어트리뷰트의 값을 취득하여 확인
    if (elems[i].className === 'red') {
        // class 어트리뷰트의 값을 변경한다.
        elems[i].className = 'blue';
    }
}

//id

    // h1 태그 요소 중 첫번째 요소를 취득
var heading = document.querySelector('h1');

console.dir(heading); // HTMLHeadingElement: h1
console.log(heading.firstChild.nodeValue); // Cities

    // id 어트리뷰트가 존재하지 않으면 id 어트리뷰트를 생성하고 지정된 값을 설정(변경)
heading.id = 'heading';
console.log(heading.id); // heading

//hasAttribute(attribute)
//getAttribute(attribute)
//setAttribute(attribute, value)
//removeAttribute(attribute)

var four = document.getElementById('four');

    // class 어트리뷰트가 존재하지 않으면
if (!four.hasAttribute('class')) {
    // four에 class 어트리뷰트를 추가하고 값으로 'blue'를 설정
    // four.className = 'blue';
    four.setAttribute('class', 'blue');
} else { // four에 class 어트리뷰트가 존재하면 기존 어트리뷰트 값에 ' blue'를 추가
    four.className += ' blue';
}

    // class 어트리뷰트의 값을 취득
console.log(four.getAttribute('class')); // blue

    // class 어트리뷰트를 제거
four.removeAttribute('class');

    // class 어트리뷰트의 존재를 확인
console.log(four.hasAttribute('class')); // false

//[HTML 콘텐츠 조작(Manipulation)]

//textContent IE+9

var ul = document.querySelector('ul');
    // var ul = document.getElementsByTagName('ul')[0];

    // 요소의 텍스트 취득
console.log(ul.textContent);
    // IE를 제외한 대부분의 브라우저들은 요소 사이의 공백 또는 줄바꿈 문자를 텍스트 노드로 취급한다
    /*
            Seoul
            London
            Newyork
            Tokyo
    */

var one = document.getElementById('one');

console.log(one.textContent); // Seoul // 요소의 텍스트 취득

one.textContent += ', Korea'; // 요소의 텍스트 변경

console.log(one.textContent); // Seoul, Korea

one.textContent = '<h1>Heading</h1>'; // 요소의 마크업이 포함된 콘텐츠 변경.

console.log(one.textContent); // <h1>Heading</h1> // 요소의 마크업이 문자열로 표시된다.

    //innerText innerHTML
var ul = document.querySelector('ul');
    // innerHTML 프로퍼티는 모든 자식 요소를 포함하는 모든 콘텐츠를 하나의 문자열로 취득할 수 있다. 이 문자열은 마크업을 포함한다.
console.log(ul.innerHTML);

    //위와 같이 마크업이 포함된 콘텐츠를 추가하는 것은 크로스 스크립팅 공격(XSS: Cross-Site Scripting Attacks)에 취약하다.
var one = document.getElementById('one');

    // 마크업이 포함된 콘텐츠 취득
console.log(one.innerHTML); // Seoul

    // 마크업이 포함된 콘텐츠 변경
one.innerHTML += '<em class="blue">, Korea</em>';

    // 마크업이 포함된 콘텐츠 취득
console.log(one.innerHTML); // Seoul <em class="blue">, Korea</em>

//insertAdjacentHTML(position, string)

var one = document.getElementById('one');

    // 마크업이 포함된 요소 추가
one.insertAdjacentHTML('beforeend', '<em class="blue">, Korea</em>');

//[style]
var four = document.getElementById('four');

    // inline 스타일 선언을 생성
four.style.color = 'blue';

    // font-size을 카멜케이스로 변환해서 사용한다.
four.style.fontSize = '2em';