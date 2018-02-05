# JavaScript

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

## ?
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

[http://dorey.github.io/JavaScript-Equality-Table/]()

> `!=` 부등연산자 (inequality) 

'!'는 부정을 의미한다. '같다'의 부정은 '같지 않다'이다. 이것을 기호로는 '!='로 표시한다. 아래의 결과는 !=의 결과인데 ==와 정반대의 결과를 보여준다.



> `!==` 불일치연산자 (strict inequality)

'!=='는 '!='와 '=='의 관계와 같다. 정확하게 같지 않다는 의미다.



> `>` Greater than operator

> `>=` Greater than or equal operator 

> `<` Less than operator 

> `<=` Less than or equal operator 

---

# 6. 조건문

> Boolean

비교 연산의 결과로 참(true)이나 거짓(false)을 . 여기서 참과 거짓은 '숫자와 문자 수업'에서 배운 숫자와 문자처럼 언어에서 제공하는 데이터 형이다. 이를 Boolean(불린)이라고 부르고 불린으로 올 수 있는 값은 true와 false 두가지 밖에 없다. 불린은 조건문에서 핵심적인 역할을 담당한다.

> 조건문

조건문이란 주어진 조건에 따라서 에플리케이션을 다르게 동작하도록 하는 것이다.

> if

조건문은 if로 시작한다. if 뒤의 괄호에 조건이 오고, 조건이 될 수 있는 값는 `Boolean`이다. `Boolean`의 값이 true라면 조건이 담겨진 괄호 다음의 `중괄호{}` 구문이 실행된다.

> else

if문의 조건이 true라면 if의 중괄호 구간이 실행되고, false라면 else 이후의 중괄호 구간이 실행된다. 즉 else는 주어진 조건이 거짓일 때 실행할 구간을 정의하는 것이다.

> else if

else if는 좀 더 다양한 케이스의 조건을 검사할 수 있는 기회를 제공한다. else if은 if나 else와는 달리 여러 개가 올 수 있다. else if의 모든 조건이 false라면 else가 실행된다. else는 생략 가능하다.

> 논리 연산자

> &&

`&&`는 좌항과 우항이 모두 참(true)일 때 참이된다.

> ||

`||`는 좌우항 중에 하나라도 true라면 true가 되는 논리 연산자다.

> !

`!`는 부정의 의미로, `Boolean`의 값을 역전시킨다. true를 false로 false를 true로 만든다. not 연산자라고 부른다. 

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

boolean true

---



1. 변수란 무엇인가.

> 메모리 내부에 값을 할당 하는 것

2. 호이스팅

> 모든 선언문들이 전역스코프 위로 올린 것 처럼 동작하는 것

선언>초기화>할당

3. Call-by-value
4. Call-by-reference
5. 선언식 표현식 생성자함수(new)

> new생성자 함수 (prototype)

6. 일급객체

> 무명의 리터럴로 표현 할 수 있다. 
>
> 변수나 자료구조에 저장 할 수 있다.
>
> 함수의 파라미터로 전달 할 수 있다.
>
> 리턴값으로 사용할 수 있다.

7. 객체생성

> 객체 리터럴

> Object () 생성자 함수

> 생성자 함수

8. 기본자료형 immutable / pass by value 	

9. var 키워드로 선언된 변수의 문제점 

   1. Function-level scope 전역 변수의 남발 

   for loop 초기화식에서 사용한 변수를 for loop 외부 또는 전역에서 참조할 수 있다.

   2. var 키워드 생략 허용 

   3. 의도하지 않은 변수의 전역화 중복 선언 허용 

      의도하지 않은 변수값 변경 

   4. 변수 호이스팅 변수를 선언하기 전에 참조가 가능하다.

10. == === && ||

11. ## Truthy & Falsy values

     Boolean context에서 `false`로 평가된다.

    - `false`
    - `undefined`
    - `null`
    - `0`
    - `NaN` (Not a Number)
    - `''` (빈문자열)

12. -


1. 함수 호출 패턴(Function Invocation Pattern)
2. 메소드 호출 패턴(Method Invocation Pattern)
3. 생성자 호출 패턴(Constructor Invocation Pattern)
4. apply 호출 패턴(Apply Invocation Pattern)