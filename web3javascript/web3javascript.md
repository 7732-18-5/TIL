#JavaScript

---

# 0. OT
>javascript는 웹 페이지를 동적으로, 프로그래밍적으로 제어하기 위해서 고안된 언어이다.

>browser가 html 화면을 출력한 후 그 형태나 동작방법을 바꿀 수 없는 문제를 해결하기 위해서, 

>ECMAScript : Ecma International에서 관리하는 Javascript Standard 이다.

> client side script : Web browser를 프로그래밍적으로 제어하는 언어

---
## 선행학습
>- Dom
>- HTML
>- CSS

## javascript
>- first-class-function
---

# 1. number & string

>숫자(number)
- 자바스크립트에서는 정수와 실수를 입력할때 구분하지 않는다
- 곱하기기호 *(asterisk) 나누기기호 /(slash)
- "숫자", '숫자' 는 문자열이다.

>문자열(string)
- "", ''로 무엇이든 둘러싸면 문자열로 인식한다 (' ", " ' 을 사용하면 안된다.)
- \n : 줄바꿈
- typeof __ : __에 어떠한 데이터를 넣으면 데이터타입이 무엇인지 출력한다
- 문자열뒤에 명령어를 쓸 수 있다. ex) "code".length

---

>Escape Sequence

---

# 2. Variable (변수)

>Container는 추상 데이터 유형(ADT) 이다.

> 'var'은 변수를 선언하는 명령어이다.

> $, _, 특수 문자를 제외한 모든 문자로 'var' 이름을 지정할 수 있다.

---

>변수를 사용하는 이유?
- 코드의 재사용을 위해서 사용합니다. (메모리를 효율적으로 사용해서 성능을 향상 시킬 수 있습니다.)

- 가독성을 높이기 위해서 사용한다. (구분하기 쉽다. 파악의 용의성)

- 반복적으로 사용하는 데이터의 관리의용의성을 위해 사용합니다.

>변수명은 변수의 공통된 특성이나 속성을 추출하여 용도를 파악 할 수 있도록 지정하는 것이 좋다.

>변수명은 추상적으로 작성하되, 최대한 짧게 작성하는 것이 좋다.

---

# 3. Comment

>코드의 부연 설명해서, 코드의 이해를 돕거나, 코드를 비활성화 시킬 때 사용한다.

>본인이 코드를 잊어버렸을 때, 다른 사람과 협업을 할 때를 위해서 사용한다.

>주석이 필요하지 않은 가독성이 높은 코드가 좋은 코드이다.

>가독성
- 인쇄물이 얼마나 쉽게 읽히는가 하는 능률의 정도. 활자체, 글자 간격, 행간(行間), 띄어쓰기 따위에 따라 달라진다.
---

# 4. 줄바꿈과 여백 

> ;

> \n

---

# 5. 비교

> 연산자란 무엇인가?

연산자란 값에 대해서 어떤 작업을 컴퓨터에게 지시하기 위한 기호이다. 	

`변수`

`상수`

`= 대입연산자`

> 비교 연산자

'programming' 에서 비교는 주어진 값들의 대소관계  ( =, !=, >, < ) 를 구분하는 기능을 한다. 비교 연산자의 결과는 true 혹은 false 중 하나이다. true는 비교 결과가 참이라는 의미이고, false는 거짓이라는 의미이다. true와 false는 블린(boolean)이라고 불리는 데이터 형식인데 이 부분은 조건문과 연관된다. 

> Equal operator

`==`

동등 연산자로 좌항과 우항을 비교해서 서로 값이 같다면 true 다르다면 false가 된다. '='가 두개인 것을 주의하자. '='가 하나인 것은 대입 연산자로 우항의 값을 좌항의 변수에 대입할 때 사용하는 것으로 의미가 완전히 다르다.

`===`

일치 연산자로 === 좌항과 우항이 '정확'하게 같을 때 true 다르면 false가 된다. ===는 서로 같은 수를 표현하고 있더라도 데이터 형이 같은 경우에만 같다고 판단하기 때문이다. 결론부터 말하면 == 연산자 대신 === 연산자를 쓰는 것을 강력하게 권한다.



`=` 대입연산자 (Assignment Operator)

`==` 동등 (비교) 연산자 (equal operator)

`===` 일치 연산자 (strict equal operator)

> 대형 프로젝트를 만들 때, 데이터타입의 차이로 `Boolean Error` 가 발생 할 수 있다. 즉, `==`  보다 `===` 을 사용하는 것을 권장한다. 

> null과 undefined는 값이 없다는 의미의 데이터 형이다. 

null은 값이 없음을 명시적으로 표시한 것이고, undefined는 그냥 값이 없는 상태라고 할 수 있다.

NaN은 0/0과 같은 연산의 결과로 만들어지는 특수한 데이터 형인데 숫자가 아니라는 의미이다.



| **null == undefined**  | **true**  |
| :--------------------: | :-------: |
| **null === undefined** | **false** |

> `!=` 부등연산자 (inequality) 

'!'는 부정을 의미한다. '같다'의 부정은 '같지 않다'이다. 이것을 기호로는 '!='로 표시한다. 아래의 결과는 !=의 결과인데 ==와 정반대의 결과를 보여준다.



> `!==` 불일치연산자 (strict inequality)

'!=='는 '!='와 '=='의 관계와 같다. 정확하게 같지 않다는 의미다.



> `>` Greater than operator

> `>=` Greater than or equal operator 

> `<` Less than operator 

> `<=` Less than or equal operator 

---

# 6. 조건문 Conditional statement

## Boolean 

비교 연산의 결과로 참(true)이나 거짓(false)을 제공하는 `data type` 이다. `Boolean` 에 올 수 있는 값은 true와 false 뿐이다. 조건문에서 핵심적이 역할을 한다.

## Conditional statement

조건문이란 주어진 조건에 따라서 에플리케이션을 다르게 동작하도록 하는 것이다.

> if

조건문은 if로 시작한다. if 뒤의 괄호에 조건이 오고, 조건이 될 수 있는 값는 `Boolean`이다. `Boolean`의 값이 true라면 조건이 담겨진 괄호 다음의 `중괄호{}` 구문이 실행된다.

> else

if문의 조건이 true라면 if의 중괄호 구간이 실행되고, false라면 else 이후의 중괄호 구간이 실행된다. 즉 else는 주어진 조건이 거짓일 때 실행할 구간을 정의하는 것이다.

> else if

else if는 좀 더 다양한 케이스의 조건을 검사할 수 있는 기회를 제공한다. else if은 if나 else와는 달리 여러 개가 올 수 있다. else if의 모든 조건이 false라면 else가 실행된다. else는 생략 가능하다.

> 조건문에 사용될 수 있는 데이터 형이 꼭 `Boolean` 인 것은 아니다. 관습적인 이유로 0는 false 0이 아닌 값은 true로 간주된다.

```javascript
if(0){
    alert(1)
}
if(1){
    alert(2)
}
```

> false와 0 외에 false로 간주되는 데이터형의 리스트다. 

if문의 조건으로 !(부정) 연산자를 사용했기 때문에 각 조건문의 첫번째 블록이 실행되는 것은 주어진 값이 false이기 때문이다.

```javascript
if(!''){
    alert('빈 문자열')
}
if(!undefined){
    alert('undefined');
}
var a;
if(!a){
    alert('값이 할당되지 않은 변수'); 
}
if(!null){
    alert('null');
}
if(!NaN){
    alert('NaN');
}
```

`control + opion + n`



If ('boolean value' = true : 조건식) {

​	실행구문;

}

```javascript
if('boolean value' = true) {
	alert(1);
}
```

> Conditional statement 응용

```javascript
prompt('당신의 나이는?');
alert(prompt('당신의 나이는?'));
alert(prompt('당신의 나이는?')*2);
```



```html
<!DOCTYPE html>
<html>  
<head>
  <meta charset = "utf-8"/>
</head>
<body>
  <script>
  	var id = prompt('아이디를 입력해주세요.')
    if(id == 'egoing'){
      var password = prompt('비밀번호를 입력해주세요.')
      if(password == '111111'){
        alert('로그인 하셨습니다.')
      } 
      else {
        alert('비밀번호가 다릅니다.')
	  }     
    }
    else {
      alert('아이디가 일치하지 않습니다.')
    }
  </script>
</body>
</html>
```

## 논리 연산자

> &&

`&&`는 좌항과 우항이 모두 참(true)일 때 참이된다.

```javascript
if(!true && true){
    alert(1);
} // true 1 
```

> ||

`||`는 좌우항 중에 하나라도 true라면 true가 되는 논리 연산자다.

```javascript
if(false || false){
    alert(4); 
} //false 
```

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
</head>
<body>
    <script>
        var id = prompt('아이디를 입력해주세요.');
        var password = prompt('비밀번호를 입력해주세요.');
        if(id == 'egoing' && password == '111111'){
            alert('로그인 하셨습니다.' +id+ '님 반갑습니다.');
        } else {
            alert('아이디가 일치하지 않습니다.');
        }
    </script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
</head>
<body>
    <script>
        var id = prompt('아이디를 입력해주세요.');
        var password = prompt('비밀번호를 입력해주세요.');
		if((id === 'egoing' || id === 'k8805' || id === 'sorialgi') && password === '111111'){
    		alert('로그인 하셨습니다.' +id+ '님 반갑습니다.');
		} else {
    	alert('아이디가 일치하지 않습니다.');
		}
    </script>
</body>
</html>
```

> !

`!`는 부정의 의미로, `Boolean`의 값을 역전시킨다. true를 false로 false를 true로 만든다. not 연산자라고 부른다. 

```javascript
if(!false && !false) {
  alert(4);
} //4
```

> Boolean

>  `false`로 간주되는 데이터 형

다음은 false와 0 외에 false로 간주되는 데이터형의 리스트다. if문의 조건으로 !(부정) 연산자를 사용했기 때문에 각 조건문의 첫번째 블록이 실행되는 것은 주어진 값이 false이기 때문이다.

```javascript
if(''){
    alert('빈 문자열')
} // undefined
if(!''){
    alert('빈 문자열')
} // 빈 문자열
if(!undefined){
    alert('undefined');
} // 
var a;
if(!a){
    alert('값이 할당되지 않은 변수'); 
} //
if(!null){
    alert('null');
} //
if(!NaN){
    alert('NaN');
}
```

#7. 반복문 Loop & Iterate

> Loop (CS) 순환(특정한 조건이 충족될 때까지 계속 반복되게 되어 있는 일련의 지시)



>  Iterate (계산・컴퓨터 처리 절차를) 반복하다



> while

```Javascript  
while('boolean value' = true){
      반복해서 실행할 코드
      }
```

While문은 (조건식)이 true 일 때, {코드} 를 반복 실행한다. (조건식)이  false 일 때 {코드} 가 실행되지 않는다.

true와 false가 `종료조건`이 되는데, 이 값을 통해서 `반복문`을 종료시킬 수 있다.

`반목문`에서 `종료조건`을 잘못 지정하면, `무한반복`되거나 `반복문`이 실행되지 않는다.

```javascript
var i = 0;//변수 선언 및 초기화 (기준점)
while(i < 10)// 반복 조건
	document.write("coding hello everybody" +i+ "<br/>")
	i = i + 1;// 증
```



> for

```javascript
for(var i = 0; i < 10; i++) {
  document.write("Coding everybody"+i+"<br/>")
}

for(초기화|1; 조건(t&f)|2|5; 증감|4|7){
  |3|6
}

++i
i = 0;
alert(++i); //1

i++
i=0;
alert(i++); //0

i = iterate
```

> Loop & Iterate 의 효용



> Loop & Iterate 의 제어

Break : 반복문의 종류

Continue : 사용한 시점에 종료되고 반복문이 계속된다.

---

# 8. 함수 function

> `Function`이란 로직을 재실행 할 수 있도록 해 
>
> **'코드의 재사용성'**, '유지보수의 효율', '가독성' 을 높인다.

```javascript
function 함수명 ([인자][인자][인자][인자]){
  코드
  return 반환값
}
```

> i++ : 실행한 후, i 를 1 증가 시킨다. 
>
> //(초기값이 0이라고 가정) 실행 할 때는 `0` 이고  실행한 후 `1`이 된다.
>
> ++i는 1을 증가시킨 후, 실행한다. 

> 함수의 효용

> 반복문과 함수의 차이 Loop Iterate, Function

반복문은 일정한 반복을 '그 자리' 에서 실행할 때 의미가 있고,
함수는 일정한 반복을 '여러 곳' 에서 실행할 때 의미가 있다.



> 함수의 호출 방법?

```javascript
function 함수명 (argument1, argument2){
  코드
  return 반환값
}

함수명(); //함수 호출
```

> 입력과 출력 (inputs outputs)

Function : 기능, 작용

함수(函數) 

> 가설 1) 음역 한 것이다. 

> 가설 2) function 의 본질적인요소를 반영한 조어 
>
> - 함수라는 상자안에 어떠한 값을 넣으면, 값에 따라 다른 값이 출력된다는 의미

------

> 함수의 출력 outputs `return` 

함수를 종료하고, 그 값을 함수의 출력값으로 반환한다.

---

> 함수의 출력 return
>
> 함수안에서 제일 먼저 나오는 return을 보면, 값을 출력하고 함수를 빠져나간다.

---

> 함수의 입력 inputs `argument`

```javascript
function _(arg) { //3. arg = 1,2 
  return arg; //4. return의 결과 1 과 2 를 순차적으로 출력한다. 
}

alert(_(1)); //1. arg = 1 
alert(_(2)); //2. arg = 2
```

```javascript
function _(arg) { //2. arg = 1 // 5. arg = 2
  return arg*1000; 
  //3. return > 1000이 출력된다. 
  //6. return > 2000이 출력된다.
}

alert(_(1)); //1. arg = 1 
alert(_(2)); //4. arg = 2

(arg) = 매개변수 parameter
(1) = 인자 argument
(2) = 인자 argument
```

![](https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/743/1514.gif)





> parameter & argument 
>
> 매개변수와 인자



---

# 9. 배열(Array)

> 배열

`배열(Array)`이란 연관된 데이터를 모아서 관리하기 위해 사용하는 `Data type`이다.

`변수(variable)`는 하나의 데이터를 저장하기 위한 것이라면, `배열(Array)`은 여러 개의 데이터를 하나의 `변수(variable)`에 저장하기 위한 것이라고 할 수 있다.



> Array 연관된 여러 개의 데이터를 모아서 관리하는 데이터 묶음이다.

> 각 각의 데이터를 `원소(element)`라고 하고 각 원소(element)를 식별하는 `식별자(Identifier)` 를 `인덱스(index)`라고 부른다.

> Array._

- length : 배열의 크기를 출력


- Push : 배열끝에 원소 추가


- concat : 여러개 원소 추가


- unshift : 배열 처음에 원소추가
- splice : 중간에 추가 
- shift : 첫번째 원소 제거
- pop : 마지막 원소 제거
- sort : 정렬
- revers : 역순정렬

```javascript
var name = 'egoing'
alert(name); //변수의 선언과 호출

var member = ['egoing', 'k8805', 'sorialgi']; // 배열

member // ['egoing', 'k8805', 'sorialgi']; // 변수 호출 

alert(member); // egoing,k8805,sorialgi 

alert(member[0]) // egoing
alert(member[1]) // k8805
```



> 배열의 효용

```javascript
function get_member1(){
    return 'egoing';
}
document.write(get_member1());
 
function get_member2(){
    return 'k8805';
}
document.write(get_member2());
 
 
function get_member3(){
    return 'sorialgi'
}
document.write(get_member3());

//

function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
var members = get_members();
document.write(members[0]);
document.write(members[1]);
document.write(members[2]);
```

> 배열의 사용 (반복문)

배열은 반복문과 결합되었을 때 진가가 들어난다. 

배열이란 연관된 데이터를 하나의 그룹으로 관리하기 위해 사용한다. 그리고 그 정를 처리 할 때 반복문을 이용한다.

```javascript
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}

members = get_members();
// members.length는 배열에 담긴 값의 숫자를 알려준다. 

for(i = 0; i < members.length; i++){
    // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
    document.write(members[i].toUpperCase()); // EGOING 
    document.write('<br />');
}
	// 결과
	//egoing
	//k8805
	//sorialgi

```

```javascript
var a = 'egoing';

a // 'egoing'

a.toUpperCase(); // 'EGOING'
```

```javascript
function get_members() {
	return ['egoing', 'k8805', 'sorialgi'];
}

members = get_members();

for(var i = 0; i < 3; i++) {
	document.write(members[i].toUpperCase()+"<br />");
}
```

> 배열의 제어

배열은 복수의 데이터를 효율적으로 관리, 전달하기 위한 목적으로 고안된 데이터 타입이다. 따라서 데이터의 추가, 수정, 삭제와 같은 작업을 효율적으로 하기 위해서 다양한 기능이 제공된다.



- push


- concat


- unshift
- splice
- shift
- pop



#10. Object

##object

> 배열은 여러 개의 데이터에 대한 식별자로서 데이터들을 인덱스로 구분해서 식별한다. 

> 배열은 데이터가 추가되면 배열 전체에서 중복되지 않는 인덱스가 **자동생성**되어 추가된 데이터에 대한 식별을 가능하게 한다. 이 인덱스를 이용해서, 데이터를 가져 올 수 있다. 

> 만약 데이터의 인덱스로 문자를 사용하고 싶다면 객체를 사용해야 한다.

> 다른 프로그래밍 언어에서는 연관배열(associative array), 맵( map), 딕셔너리(Dictionary)라는 데이터 타입이 객체에 해당한다.



```javascript
var _ = {'key':value, 'key':value, 'key':value};

// alert(_['key']); 
// alert(_.key);
// _.key


var _ = {};
_['key'] = value;
_['key'] = value;
_['key'] = value;

//

var _ = new Object();
_['key'] = value;
_['key'] = value;
_['key'] = value;

//

```

> 객체와 반복문

```javascript
var arr = ['a', 'b', 'c'];

arr // ['a', 'b', 'c'];

for(var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//1
//2
//3
```

> 배열은 저장된 **데이터**들이 **순서**를 가지고 있다.

> 객체 안에 저장된 데이터들은 순서가 없다. 다만 `key` 와 `value`가 있다.



```javascript
var grades = {'a:1', 'b:2', 'c:3'};
for(key in grades) {
	document.write("key : " +key+ "value : " +grades[key]+ "<br />");
}
```

```javascript
var arr = ['a', 'b', 'c'];

for(var name in arr){
	console.log(name);
}

//0
//1
//2

for(var name in arr){
	console.log(arr[name]);
}

//a
//b
//c
```

> For-in문 

- 배열 & 객체 무엇이 되었건, key와 value를 열거 할 수 있는 기능을 한다.

##객체 지향 프로그래밍

> 서로 연관되어 있는 값과 서로 연관되어 있는 처리를 하나의 그릇에 모아서 그룹핑 하는 방식을 의미한다.

```javascript
var grades = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function(){
        for(var name in this.list){
            document.write(name+':'+this.list[name]+"<br />");
        }
    }
};
grades.show();
```

#11. 모듈

프로그램은 작고 단순한 것에서 시작해 크고 복잡한 것으로 진화한다. 그 과정에서 코드의 재활용성을 높이고, 유지보수를 쉽게 할 수 있는 다양한 기법들이 사용된다. 그 중의 하나가 코드를 여러개의 파일로 분리하는 것이다. 이를 통해서 얻을 수 있는 효과는 아래와 같다.

- 자주 사용되는 코드를 별도의 파일로 만들어서 필요할 때마다 재활용할 수 있다.
- 코드를 개선하면 이를 사용하고 있는 모든 애플리케이션의 동작이 개선된다.
- 코드 수정 시에 필요한 로직을 빠르게 찾을 수 있다.
- 필요한 로직만을 로드해서 메모리의 낭비를 줄일 수 있다.
- 한번 다운로드된 모듈은 웹브라우저에 의해서 저장되기 때문에 동일한 로직을 로드 할 때 시간과 네트워크 트래픽을 절약 할 수 있다. (브라우저에서만 해당)

## 모듈이란

순수한 자바스크립트에서는 모듈(module)이라는 개념이 분명하게 존재하지는 않는다. 하지만 자바스크립트가 구동되는 호스트 환경에 따라서 서로 다른 모듈화 방법이 제공되고 있다. 

> 호스트 환경이란?

호스트 환경이란 `자바스크립트`가 구동되는 환경을 의미한다. `자바스크립트`는 브라우저를 위한 언어로 시작했지만, 더 이상 브라우저만을 위한 언어가 아니다. 예를들어 [node.js](http://nodejs.org/about/)는 서버 측에서 실행되는 `자바스크립트`다. 이 언어는 `자바스크립트`의 문법을 따르지만 이 언어가 구동되는 환경은 브라우저가 아니라 서버측 환경이다. 또 구글의 제품 위에서 돌아가는 [Google Apps Script](https://developers.google.com/apps-script/) 역시 `자바스크립트`이지만 google apps script가 동작하는 환경은 구글 스프레드쉬트와 같은 구글의 제품 위이다. 여러분은 `자바스크립트`의 문법을 이용해서 PHP와 같은 서버 시스템을 제어(node.js)하거나 구글의 제품(Google Apps Script)을 제어 할 수 있다. 



> 모듈의 효용

필요할 때마다 함수를 정의해서 사용하는 것은 유지보수도 어렵고 효율적이지 않다.



> 라이브러리란?

라이브러리는 모듈과 비슷한 개념이다. 모듈이 프로그램을 구성하는 작은 부품으로서의 로직을 의미한다면 라이브러리는 자주 사용되는 로직을 재사용하기 편리하도록 잘 정리한 일련의 코드들의 집합을 의미한다.

# 12.UI API

> UI란 무엇인가?

UI(User Interface)는 사용자와 시스템이 만나는 접점이다.

> API란 무엇인가?

- API(Application Programming Interface)는 Programmer와 시스템이 만나는 접점이다.
- API(Application Programming Interface)는 프로그램이 동작하는 환경을 제어하기 위한 조작 장치이다. 
- UI가 일반 사용자를 위한 조작장치라면, API는 개발자(;일반 사용자들이 UI 사용해 시스템을 제어하는 일이 가능하도록 기능을 구현하는 일을 하는 사람) 들이 시스템을  `programming language` 를 통해 조작하고 제어하기 위한 장치이다.
- API는 `programming language` 를 통해서 조작할 수 있다. 

Ex)

```javascript
javascript:alert("API란 무엇인가?") // browser 주소창에 입력하면, "API란 무엇인가?"라는 알림창이 공지된다.
```

> Interface 란 무엇인가?

주체와 주체가 만나는 접점



- 프로그래밍을 공부하기 위한 자료 : 튜토리얼(기본적인 조작 안내서(문법)), 레퍼런스(명령어 사전)
- 자바스크립트는 자바스크립트가 기본적으로 제공하는 API와 그것이 구동되는 호스트환경이 제공하는 API가 
  다르다.




> 일반사용자는 UI를 사용해, 시스템을 제어한다. UI를 사용해 시스템을 제어하는 것을 당연하게 생각한다. 그러나 사실을 그렇지 않다.

> UI 내부의 시스템을 구축하는 사람들을 `Developer` 또는 `Programmer` 라고 부른다. 
>
> 이들은 일반 사용자가 UI를 사용해 시스템을 제어 하는 것을  가능하도록 구현하는 사람들이다.

---

> 일반사용자는 UI를 사용해 시스템을 제어하고, 개발자는 UI와 API를 사용해 App을 제어한다.

> `사용자`에게 `웹 개발자`는 인프라를 제공하고, `웹 개발자` 에게 `브라우져 개발자`는 인프라를 제공한다.
>
> 사용자와 웹 개발자의 관계의 접점이 `Interface` 라고 할 수 있다. 

> 웹 개발자는 사용자에게 App을 제어할 수 있도록 User interface를 제공하고,
>
> 브라우저 개발자는 웹 개발자에게 App을 제어할 수 있도록, Application programming interface를 제공한다.

---

>프로그램의 계층구조

1. 사용자
2. 게임 개발자, 웹 개발자, 앱 개발자 : 대중기술분야
3. Browser 
4. OS
5. C, C++, etc
6. 어셈블리어
7. 기계어



>학문의 계층구조

1. 사용자 
2. 소프트웨어공학
3. 전산공학
4. 전자공학
5. 전기공학
6. 물리학

> - 앞 번호 일수록 '응용기술'에 해당하고

> - 뒷 번호 일수록 '근원적, 순수학문'에 해당한다.



> reference(참고문헌 : 레퍼런스) 명령어의 사전이라고 할 수 있다.

> tutorial(안내서 : 튜토리얼) 언어의 문법이라고 할 수 있다.



> Javascript API 의 종류

- 자바스크립트 자체 API


- 자바스크립트가 동작하는 호스트 환경의 API

  ​

> 자바스크립트 API 문서

- [ECMAScript (표준문서)](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
- [자바스크립트 사전 (생활코딩)](http://opentutorials.org/course/50)
- [자바스크립트 레퍼런스 (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [jscript 레퍼런스 (MSDN)](http://msdn.microsoft.com/ko-kr/library/vstudio/z688wt03(v=vs.100).aspx)

> 호스트 환경의 API 문서

- [웹브라우저 API](https://developer.mozilla.org/en-US/docs/Web/API)
- [Node.js API](http://nodejs.org/api/)
- [Google Apps Script API](https://developers.google.com/apps-script/)



# 13. 정규표현식(regular expression)

정규표현식(正規表現式, Regular Expression)은 문자열을 처리하는 방법 중의 하나이다. 특정한 조건의 문자를 '검색'하거나 '치환'하는 과정을 매우 간편하게 처리 할 수 있도록 하는 수단이다.

## `컴파일(compile)`과 `실행(execution)`

> `컴파일(Compile)` : 정규표현식 생성 

컴파일은 검출하고자 하는 `패턴(pattern)` 을 만드는 것이다. 

- 정규표현식 객체를 생성한다.


- 객체를 만드는 방법은 두가지가 있다.

ex) `a`라는 텍스트를 찾는 정규표현식을 생성하자

> 정규표현식 리터럴
```javascript
var pattern = /a/ 
```

> 정규표현식 객체 생성자

```javascript
var pattern = new RegExp('a');
```

> `정규표현식 리터럴`과 `정규표현식 객체 생성자` 의 

 - 차이점과 공통점은 무엇인가? 
 - 장단점은 무엇인가?

---

> `실행(Execution)`

> RegExp.exec()

`exec` 는 필요한 정보를 추출하기 위해서 사용한다.

``` javascript
console.log(pattern.exec('abcdef')); // ["a"] 
//실행결과 문자열 'a'를 배열로 리턴한다.

console.log(pattern.exec('bcdefg')); // null

//인자 'bcdef'에는 'a'가 없기 때문에 null을 리턴한다.
```

> RegExp.test()

`test` 는 필요한 정보의 존재유무를 test 하기 위해서 사용한다.

test는 인자 안에 패턴에 해당되는 문자열이 있으면 true, 없으면 false를 리턴한다.

```javascript
console.log(pattern.test('abcdef')); // true
cnosole.log(pattern.test('bcdefg')); // false
```



##String method 실행

> String.match()

RegExp.exec()와 비슷하다.

```javascript
console.log('abcdef'.match(pattern)); // ["a"]
console.log('bcdefg'.match(pattern)); // null
```

> String.replace()

```javascript
console.log('abcdef'.replace(pattern, 'A'));  // Abcdef
```

문자열에서 패턴을 검색해서 이를 변경한 후에 변경된 값을 리턴한다.



>`i` 를 붙이면, 대소문자를 구분하지 않는다.

```javascript
var xi = /a/;
console.log("Abcde".match(xi)); // null

var oi = /a/i;
console.log("Abcde".match(oi)); // ["A"];
```

> `g` 를 붙이면, 검색된 모든 결과를 리턴한다.
```javascript
var xg = /a/;
console.log("abcdea".match(xg));

var og = /a/g;
console.log("abcdea".match(og));
```

## 정규표현식

```javascript
var pattern = /(\w+)\s(\w+)/; 
// () 는 그룹을 의미한다.
// \w 는 문자를 의미한다. (a-z A-Z 0-9)
// + 는 수량자를 의미한다. (앞에 문자열이 하나이상 있을 때 유효하다)
// \s 는 공백을 의미한다.
var str = "coding everybody"; //패턴과 일치한다.
var result = str.replace(pattern, "$2, $1"); 
//$2 $1 두번째 괄호 첫번째 괄호 
console.log(result); // everybody, coding
```

## 치환

```javascript
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);

//생활코딩 : <a href="http://opentutorials.org/course/1">http://opentutorials.org/course/1</a> 입니다. 네이버 : <a href="http://naver.com">http://naver.com</a> 입니다.

```

> Reference

- [정규표현식을 시각화](http://www.regexper.com/)
- [정규표현식 빌더](http://www.regexr.com/)

# 14. 함수(function)

## 유효범위(Scope)

변수의 수명을 의미한다.

```javascript
var vscope = 'global';
function fscope(){
	var vscope = 'local'// 2. 코드작성 
  	alert(vscope); 3
}
fscope(); // 1. global 3. local 
```

> Global scope 전역변수의 : 유효범위는 어플리케이션 전역이다.

> local scope 지역변수 :  유효범위는 선언 된 함수 내부이다. 

``` javascript
var vscope = 'global'
function fscope(){
	var vscope = 'local';
}
fcope();
alert (vscope); // global  

var vscope = 'global'
function fscope(){
	vscope = 'local';
}
fcope();
alert (vscope); // local

var vscope = 'global'
function fscope(){
	var vscope = 'local';
	vscope = 'local';
}
fcope();
alert (vscope); // global 
```

> ```javascript
> var sample = 'global';
> function _ () {
> 	var sample = 'local';
> }	
> // 그 외에 var을 사용하면 전역변수가 된다.
> //'함수 내부에서 var 을 사용하면 지역변수가 된다.'
> ```

> 전역변수는 최대한 사용하지 않는 것이 좋다.
>
> 여러가지 이유로 그 값이 변경 될 수 있기 때문이다.
>
> 함수의 핵심은 로직의 재활용인데, 전역변수의 값이 달라지게 되면 
>
> 버그의 원인이 될 수도 있다.

> ! 변수를 선언할 때는 var을 붙이도록하자.
>
> !전역변수를 사용해야 하는 경우라면 그것을 사용하는 이유가 명확할 때만 사용한다.

---

```javascript
function a () {
  	var i = 0;
}
for(var i = 0; i < 5; i++){
	a();
  	document.write(i);
}
// 01234
```



```javascript
function a (){
    i = 0;
}
for(i = 0; i < 5; i++){
    a();
    document.write(i);
} //무한반복
```

`Global variable` 는 `Global scope` 를 갖는다.

`Local variable` 는 `Local scope(function-level scope)` 를 갖는다.

## 전역변수의 사용

> 불가피하게 전역변수를 사용해야하는 경우

하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리한다. 
(전역변수를 사용하더라도 변수명의 중복을 피할 수 있다.)

```javascript
var MYAPP = {} // 객체리터럴
MYAPP.calculator = {
    'left' : null,
    'right' : null
}
//변수의 값은 객체이다. 그 객체는 속성을 갖는다.
//객체 안에 있는 변수를 `속성`이라고 부른다.

MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
 
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
} // 30
document.write(sum());
```



```javascript
function myappfn(){
    var MYAPP = {} //지역변수
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}

myappfn(); 

//myappfn이라는 함수명도 결국엔 변수안에 함수가 들어가 있는 것이기 때문에 myappfn이 전역변수가 되는 것이다. 그렇기 때문에 단하나의 전역변수도 허용하고 싶지 않을 때 함수를 정의하고 그것을 바로 호출하는 기법을 익명함수라고 한다.

(function(){
    var MYAPP = {} //지역변수
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}())

//javascript 에서 로직을 모듈화 하는 일반적인 방법이다.
```

## 유효범위의 대상 (function)

> `javascript` 에서 function _  () {} : 중괄호 안에서 선언한 변수만이 지역변수이고 지역범위를 갖는다.

```javascript
for(var i = 0; i < 1; i++){
    var name = 'coding everybody';
}
alert(name); //coding everybody
```

## 정적 유효범위

> `javascript` 는 함수가 선언된 시점에서의 유효범위를 갖는다. 이러한 유효범위의 방식을 정적 유효범위(static scoping), 혹은 렉시컬(lexical scoping)이라고 한다. 

```javascript
var i = 5; //전역변수
function a() {
	var i = 10; //지역변수
	b(); //b 라는 함수를 호출
} // 

function b() {
	document.write(i);
} // '사용 될 때'가 아닌 '정의 될 때'의 전역변수가 사용되게 된다. 
// 이러한 현상을 정적 유효범위라고 한다.
// 정의된 시점에서 사용될 변수가 정해져 있기 때문에 '정적 유효범위'라고 부른다.

a();
```

# 15. 값으로서의 함수와 콜백

Javascript 에서는 함수도 객체이다. 다시 말해서 함수는 일종의 값이라고 할 수 있다.

```javascript
var a = 'value' 
// 변수(variable) 'a' 에 'value'를 담을 수 있다. 
// 그 이유는 'value'라는 문자열이 값(value) 이기 때문이다.
```

```javascript
function a () {}
// 위의 함수는 'a' 라는 변수(variable)에 담겨있는 값(value)이라는 의미이다.

var a = function() {}
// 동일한 의미를 다르게 정의한 것이다.
```

```javascript
a = {
  b:function(){ //key:velue(){} 
//객체 안에서 'b'라는 것은 값을 저장하고 있는 그릇의 역할을 하고 있다. 변수의 역할을 하고 있다고 할 수 있다. 객체 안에서 변수의 역할을 하는 것을 우리는 속성(property) 라고 부른다. 그리고 그 속성(property)에 저장된 값이 함수 일 때, 메소드(method) 라고 부른다.
  }
}
```

> `a` 라는 변수에 담겨있는 객체 안에는 `b`라고 하는 속성있다. 
> 그 속성(property)의 값(value)이 함수이다. 
> 이 함수를 `메소드(method)`라고 부른다. 

> 객체 안에 정의된 함수를 `메소드(method)`라고 부른다.

```javascript
function cal(func, num){ //첫번째 인자로 전달된 func를 호출하고, 두번째 인자로 전달된 값을 첫번째 인자로 전달한다.
    return func(num)
}
function increase(num){
    return num+1
}
function decrease(num){
    return num-1
}
alert(cal(increase, 1));
alert(cal(decrease, 1));
```

> 함수는 값이기 때문에 다른 함수의 인자로도 전달 될 수 있다.

## 함수의 용도

함수는 변수에 저장 될 수 있다.

그렇기 때문에 객체에 저장 될 수 있는데 이러한 함수를 **메소드(method)** 라고 부른다.

```javascript
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
alert(cal('plus')(2,1)); // 3
alert(cal('minus')(2,1)); // 1

//함수는 인자로도 전달 될 수 있고 리턴값으로도 사용 될 수도 있다.
```

```javascript
var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input); //11 > 121 >60.5
}
alert(input);

//함수는 값이기 때문에 배열에도 저장 할 수 있다.
```

> 함수는 변수 매개변수 리턴값에 사용될 수 있다. 
>
> 이러한 용도로 사용될 수 있는 것을 일급객체(first-class-citizen first-class-object first-class-entity) 이라고 한다.

## 콜백

값으로 사용될 수 있는 (함수의)특성을 이용하면 (함수의)인자로 함수를 전달할 수 있다. 값으로 전달된 함수는 호출될 수 있기 때문에 이를 이용하면 함수의 동작을 완전히 바꿀 수 있다.



콜백은 어떠한 함수가 수신하는 인자가 함수인 경우를 일컫는다.

```javascript
function sortNumber(a,b){
    // 위의 예제와 비교해서 a와 b의 순서를 바꾸면 정렬순서가 반대가 된다.
    return b-a;
}
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
alert(numbers.sort(sortNumber)); // array, [20,10,9,8,7,6,5,4,3,2,1]
```

```javascript 
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
var sortfunc = function(a, b){
  	return a - b;
}
console.log(numbers.sort(sortfunc)); 
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]

// 2번
//  if(a > b) {
// 		return 1;
//	} else if(a > b) {
//		return -1;
//	} else {
//		return 0;
//  }
//}
//console.log(numbers.sort(sortfunc)); 

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]

// 1번
// console.log(numbers.sort()); 

// [1, 10, 2, 20, 3, 4, 5, 6, 7, 8, 9,]

//.앞에 위치한 'numbers'는 객체이다. 
//.sort는 메소드(method)이다. (객체에 속해 있기 때문에 메소드라고 부른다.)
// 내장객체 내장메소드 빌트인객체 빌트인메소드라고 부른다.
// 사용자정의객체 사용자 정의 함수
```

> 콜백함수는 값으로서 함수를 사용할 수 있기 때문에, 동작방법을 바꿀 수 있다.

> 콜백함수가 가능한 이유는 javascrpt에서 함수가 값이기 때문이다.

## 비동기 처리 

Ajax(asynchronous javascript and xml) 

> 콜백 

> 이해하지 못했다.

# 15. 클로저(Closure)

> 클로저(closure)는 `내부함수` 가 `외부함수`의 `맥락(context)`에 접근 할 수 있는 것을 의미한다.

> 외부함수

>내부함수

```javascript
function outter() { //외부함수
	function inner() { //내부함수
  		var title = 'coding everybody';
  		alert(title);
	}
  	inner();
}
outter(); //'coding everybody'
```

```javascript
function outter(){
    var title = 'coding everybody';  
    function inner(){        
        alert(title);
    }
    inner();
}
outter(); //'coding everybody'
```

```javascript
function outter(){
    var title = 'coding everybody';  
    return function(){        
        alert(title);
    }
}
inner = outter();
inner(); //'coding everybody'

함수 outter가 선언되고 구문으로 변수가 선언된다. 
리턴값으로 함수가 선언되었다. 
7행에서 함수 outter를 호출한다. 
그 결과 변수 inner의 값이 outter이 되고 이를 익명함수라고 한다.  
8행이 되면 outter 함수는 이미 종료되었기 때문에 
지역변수 또한 소멸 되는 것이 당연하다.
그러나 inner();의 결과 'coding everybody' 가 출력된다.
이것은 외부함수의 지역변수(title)의 값이 소멸되지 않았다는 것을 의미한다.
클로저란 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 
외부함수의 지역변수를 사용하는 내부함수가 소멸될 때 까지 외부함수가 소멸되지 않는 것을 의미한다. 이러한 특징은 scope에서 '접근성' 과 '생존기간(life-cycle)' 의 특징의 예외적인 상황이라고 할 수 있기 때문에 중요하다.
```

## Private variable

```javascript
function factory_movie(title) { //title : 매개변수(parameter)
	return {
    	get_title : function() { //property : method
				return title; // 인자
    	},
    	set_title : function(_title){ //property : method
        	    //title = _title
          		if(typeof _title === 'String'){
					title = _title
        		} else {
        			alert('title 은 문자열이어야 합니다.')
        		}
    	}
	}
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title()); //Ghost in the shell
alert(matrix.get_title()); //Matrix
 
ghost.set_title('공각기동대');
 
alert(ghost.get_title()); //공각기동대
alert(matrix.get_title()); //Matrix
  }
}
```

---

> 1. 클로저는 객체의 메소드에서도 사용할 수 있다. 위의 예제는 함수의 리턴값으로 객체를 반환하고 있다. 이 객체는 메소드 get_title과 set_title을 가지고 있다. 이 메소드들은 외부함수인 factory_movie의 인자값으로 전달된 지역변수 title을 사용하고 있다.

> 2. 동일한 외부함수 안에서 만들어진 내부함수나 메소드는 외부함수의 지역변수를 공유한다. 17행에서 실행된 set_title은 외부함수 factory_movie의 지역변수 title의 값을 '공각기동대'로 변경했다. 19행에서 ghost.get_title();의 값이 '공각기동대'인 것은 set_title와 get_title 함수가 title의 값을 공유하고 있다는 의미다.

> 3. 그런데 똑같은 외부함수 factory_movie를 공유하고 있는 ghost와 matrix의 get_title의 결과는 서로 각각 다르다. 그것은 외부함수가 실행될 때마다 새로운 지역변수를 포함하는 클로저가 생성되기 때문에 ghost와 matrix는 서로 완전히 독립된 객체가 된다.

> 4. factory_movie의 지역변수 title은 2행에서 정의된 객체의 메소드에서만 접근 할 수 있는 값이다. 이 말은 title의 값을 읽고 수정 할 수 있는 것은 factory_movie 메소드를 통해서 만들어진 객체 뿐이라는 의미다. JavaScript는 기본적으로 Private한 속성을 지원하지 않는데, 클로저의 이러한 특성을 이용해서 Private한 속성을 사용할 수 있게된다.

> Private property 는 객체의 외부에서는 접근 할 수 없는 외부에 감춰진 속성이나 메소드를 의미한다. 이를 통해서 객체의 내부에서만 사용해야 하는 값이 노출됨으로서 생길 수 있는 오류를 줄일 수 있다. 

>`java` 와 같은 언어에서는 이러한 특성을 언어의 문법 차원에서 지원하고 있다.

---

## 주의사항 

```javascript
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}
//5:5
```



```javascript
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(j) {
        return function(){
            return j;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}
//0
//1
//2
//3
//4
```

# 16. Arguments

arguments의 객체는 인스턴스다.



```javascript
function sum(//parameter) {
	var i, _sum = 0;
  	for(i = 0; i < arguments.length; i++) { //
    	document.write(i + ':' + arguments[i] + '<br />');
     	_sum += arguments[i];
  }   
  return _sum;
}
document.write('result : ' + sum(1,2,3,4));

//매개변수를 정의하지 않고, 인자를 정의해도 에러가 발생하지 않는다.

```

> 매개변수와 인자의 차이는 무엇인가?

```javascript
function a(arg) { // arg : parameter 

}
a[i] // i : arguments
```

> Parameter

- 함수명.length  : 함수 내에서 정의하고 있는 매개변수의 갯수를 의미한다.
- arguments.length : 함수가 호출될 때 전송되는 인수의 갯수를 알려준다.

> 예시

```javascript
function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
zero(); // zero.length 0 arguments 0 
one('val1', 'val2');  // one.length 1 arguments 2 
two('val1');  // two.length 2 arguments 1
```

> 인자와 인수의 차이는 무엇인가?

#17. 함수호출

기존의 함수 호출 방식 외에 , _.apply(), _call()을 사용해 함수를 호출 할 수 있다.

```javascript
function func(){ 
}
func();
```

> Javascript에서 함수는 객체이다. 
>
> 객체는 속성을 가지고 있다.
>
> 그 속성에 값이 저장되어 있다면 속성(property) 라고 부른다. 
>
> 그 속성의 값에 함수가 들어있다면 메소드(method) 라고 부른다.

 ```javascript
function sum(arg1, arg2){
    return arg1+arg2;
}

sum(1,2); //3 (case1)

sum(4,2); //6

sum.apply //function apply() {[native code]}

//apply는 함수이다. 
//apply는 sum 이라는 function(object)|함수객체에 담겨있는 메소드(method) 라는 뜻이다. 
//[native code]는 브라우져에서 사용자에게 제공하는 내장된 코드라는 의미이다. [native code]의 상세 코드내용은 공개되지 않는다.

sum.apply(null, [1,2]) //3 (case2)
sum.apply(null, [4,2]) //6

alert(sum.apply(null, [1,2])) //3
alert(sum.apply(null, [4,2])) //6

//case 1, case 2 함수를 호출하는 두 방법의 차이는 무엇인가?
 ```

> .apply

> .call 

---

```javascript
o1 = {val1:1, val2:2, val3:3} //sum 6
o2 = {v1:10, v2:50, v3:100, v4:25} //sum 185
function sum(){ //sum 함수가 정의되어 있다.
    var _sum = 0; 
  // var this = o1; 이라는 코드가 암시적으로 들어간다고 생각하면 된다.
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
alert(sum.apply(o1)) // 6 
alert(sum.apply(o2)) // 185
// apply는 호출할 때 사용한다.
// sum() sum.apply(null) 로 호출 할 수 있다.


o1 = {val1:1, val2:2, val3:3, sum:sum} 
o2 = {v1:10, v2:50, v3:100, v4:25, sum:sum} 

alert(o1.sum());
//6function sum(){
//	var _sum = 0; 
//	for(name in this){
//      _sum += this[name];
//  }
//  return _sum;
//}

alert(o2.sum());
//185function sum(){
//	var _sum = 0; 
//	for(name in this){
//      _sum += this[name];
//  }
//  return _sum;
//}
```

_.apply(null, [a, b ...]) 

- [a,b …] 에 함수에 인자의 값이 들어간다.
- null 에 객체가 들어가는데 apply()를 쓰는 상황은 this를 사용하는 독립적인 함수가 있을 때, apply 를 사용해서 매번 다른 객체를 넣어주면 함수가 그 객체의 메소드 처럼 된다. 여러 객체에서 쓸 수 있는 공용함수 쓰기 위해서 만들어진 기법인 듯하다.


#18. 객체지향 프로그래밍

객체지향 프로그래밍(Object-Oriented Programming)은 좀 더 나은 프로그램을 만들기 위한 프로그래밍 패러다임으로 로직을 상태(state)와 행위(behave)로 이루어진 객체로 만드는 것이다. 

> 객체는 변수와 메소드를 그룹핑한 것이다.

객체지향프로그래밍(OOP) : 로직을 상태와 행동(변수와 메소드)로 나누고 연관된 것들끼리 그룹핑한 것을 객체라 하고 이를 조립해 프로그래밍을 하는 것.

- 설계와 추상화 (문법)

> 객체지향의 특징 : 객체 지향은 코드의 재활용성을 높인다.

- 부품화 : 프로그램의 로직들을 기능별로 나눠 부품화하는 것
- 은닉화, 캡슐화 : 로직을 온전히 부품화하기 위해 내부동작법은 숨기고 사용법만 노출하는 것
- 인터페이스 : 부품들간의 접점에서의 규칙, 약속



#19. 생성자와 new 

>Prototype-based-programming

객체란 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 할 수 있다. 객체 내의 변수를 프로퍼티(property) 함수를 메소드(method)라고 부른다. 

```javascript
var person = {}
person.name = 'egoing';
person.introduce = function() {
	return 'My name is' + this.naem;
}
document.write(person.introduce());
```

```javascript
var person = {
  'name' : 'egoing'
  'introduce' :  function() {
  	return 'My name is' + this.naem;
  }
}
document.write(person.introduce());
```



>2.

>3.