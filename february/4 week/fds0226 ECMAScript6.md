> ' \ '

> 템플릿 언어란 무엇인가?

---

#fds0226 ECMAScript6

`Let` 과 `const` 그리고  `block level scope`

> ECAMScript6 10,  11, 12 수업에서 제외한다.

#`let ` 

> Block-level scope 이다.
>
> - `var` 는 global-level scope 이다. 따라서 다양한 문제가 발생한다.

> SyntaxError
>
> - 중복 사용시에 재할당 되지 않고 `SyntaxError` 가 나온다.

> 호이스팅(Hoisting)
>
> - Javascript 는 모든 선언(var, let, const, function, [function*](http://poiemaweb.com/es6-generateor), class)을 호이스팅(Hoisting)한다.
>
> - `let` 은 선언문 이전에 참조할 경우에  `SyntaxError`  가 나온다. 그러나 이 상황도 호이스팅이 이루어진 상황이라는 사실을 간과해서는 안된다.
>
>   ![let hoisting](http://poiemaweb.com/img/let-lifecycle.png)

> Closure
>
> 

> `Global Object` 와 `let`  
>
> let 키워드로 선언된 변수를 전역 변수로 사용하는 경우, let 전역 변수는 전역 객체의 프로퍼티가 아니다. 즉 window.foo와 같이 접근할 수 없다. let 전역 변수는 보이지 않는 개념적인 블럭 내에 존재하게 된다.

#`const`

> 선언과 초기화 
>
> - 재할당이 불가능하다.
>
> - ```javascript
>   {
>     const FOO = 10; 
>     // FOO 대문자라는 것은 상수라는 의미한다.
>     console.log(FOO); //10
>   }
>   console.log(FOO); // ReferenceError: FOO is not defined
>   ```
>
> - ```javascript
>   const user = {
>     name: 'Lee',
>     address: {
>       city: 'Seoul'
>     }
>   };
>
>   // const 변수는 재할당이 금지된다.
>   // user = {}; // TypeError: Assignment to constant variable.
>
>   // 프로퍼티 값의 재할당은 허용된다!
>   user.name = 'Kim';
>
>   console.log(user); // { name: 'Kim', address: { city: 'Seoul' } }
>
>   객체 타입 변수 선언에는 const를 사용하는 것이 좋다.
>
>   일반적으로 객체에 대한 참조는 변경될 필요가 없다. 즉, const를 사용하여 객체 참조를 변경시킬 수 없어도 객체의 프로퍼티를 변경 가능하다. 만일 새로운 객체에 대한 참조를 변수에 재할당해야 한다면 let을 사용한다.
>   const를 사용한다 하더라도 객체의 프로퍼티를 변경할 수 있다.
>
>   객체타입인데 재할당이 이뤄져야 한다면, let을 사용하면 된다.
>   ```

```javascript
const user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};
user.name = 'Kim';
console.log(user); 

let user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};
user.name = 'Kim';
console.log(user); 
```

#fds0226 ECMAScript6

#`template Literals`



# `=> (arrow function)`

```javascript
// 매개변수 지정 방법
    () => { ... } // 매개변수가 없을 경우
     x => { ... } // 매개변수가 한개인 경우, 소괄호를 생략할 수 있다.
(x, y) => { ... } // 매개변수가 여러개인 경우, 소괄호를 생략할 수 없다.

// 함수 몸체 지정 방법
x => { return x * x }  // single line block
x => x * x             // 함수 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return된다. 위 표현과 동일하다.

() => { return { a: 1 }; }
() => ({ a: 1 })  // 위 표현과 동일하다. 객체 반환시 소괄호를 사용한다.

() => {           // multi line block.
  const x = 10;
  return x * x;
};
```

> 콜백 함수의 대용으로 사용한다.
>
> 일반적으로 arrow function 은 콜백함수에만 사용한다.
>
> 콜백을 제외하고 this와 관련되어있는 상황에 사용하지 않는다.