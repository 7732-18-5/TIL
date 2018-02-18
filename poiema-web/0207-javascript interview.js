// 1. index.html 에서 main.js 를 로드하기 위한 코드를 완성하라 단 index.html 은 프로젝트 루트에 위치하고 main.js 는 src / js 디렉터리에 위치한다.
<html>
<head>
</head>
<body>
    <script src="src/js/main.js"> </script>
</body>
</html>

// 4. var foo = 42 / -0 console.log(foo); 의 결과를 기술
-infinity

// 9. console.log(!!null); 의 결과는 무엇인가?
!! 는 피연산자를 boolean으로 변환한다.
즉 답은 'false' 이다.

// 10. 0 에서 10 미만의 홀수만을 큰 수 부터 출력하는 코드를 for 문을 사용하여 작성하라.
for(var i = 9; i >= 0; i--) {
    if(i % 2 !== 0) console.log(i);
}

// 11. 0 에서 10 미만까지 3의 배수를 큰 수 부터 출력하는 코드를 while 문을 사용하여 작성하라. 단 0은 출력하지 않는다.

var i = 9;
while(i > 0) {
    if(i % 3 === 0) console.log(i);
    i--;
}

// 12. 문자열을 값으로 갖는 name 프로퍼티와 name 프로퍼티를 출력하는 sayName 메소드를 갖는 객체 obj를 생성하라. 단 객체 리터럴 방식을 사용한다.

var obj = {
    name: 'string',
    sayName: function() {
        console.log(this.name);
    }
}

obj.sayName();

// 13. 문자열을 값으로 갖는 name 프로퍼티와 name 프로퍼티를 출력하는 sayName 메소드를 갖는 객체 obj를 생성하라. 단 생성자 함수 방식(함수명 person)을 사용한다.

function Person() {
    this.name = 'string';
    this.sayName = function () {
        console.log(this.name);
    };
}

// 14. var person = { 'my-name':'Lee'}; 일 때, my-name 프로퍼티의 값을 'Kim'으로 변경하고 consol.log()를 사용하여 출력하는 코드를 작성하라.
var obj = new Person();
obj.sayName();

var person = {'my-name': 'Lee'};

person['my-name'] = 'Kim';
console.log(person['my-name']);

//6. 변수 호이스팅이 발생하는 이유를 설명하라.
