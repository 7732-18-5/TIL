

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



> for

