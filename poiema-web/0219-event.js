//DOM Level 2 Event Listener

if (elem.addEventListener) {    // IE9+
    elem.addEventListener('click', func);
} else if (elem.attachEvent) {  // ~IE8
    elem.attachEvent('onclick', func);
}
//
function foo() {
    alert('clicked!');
}
elem.addEventListener('click', foo());
    // 이벤트 발생 시까지 대기하지 않고 바로 실행된다

elem.addEventListener('click', foo);
    // 이벤트 발생 시까지 대기한다