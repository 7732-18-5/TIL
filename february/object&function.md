---

## 객체 리터럴 (object literal)	 

```javascript
Var _ = {property name/value method};
```

> 선언과 동시에 인스턴스가 생성된다.
>
> 인스턴스 객체내에 존재하는 함수를 의미한다.

```javascript
Var _ = {};

_.property name = property value;

_.property name = function () {

	;

}
```



---

## object() 생성자 함수 (Built-in function)

```javascript
Var _ = new Object ();

// property + method 

Var _ = new Object ();

_.property name = propert value; 

_.property name = function () {

	;

}
```



Var _ = new Object ();

// property



> new 연산자와 object() 생성자 함수를 사용하여 빈객체를 생성 할 수 있다. 
>
> 빈 객체 생성 이후 프로퍼티와 메소드를 추가하여 객체를 완성하는 방법이다.

_.property name = propert value; 

_.property name = function () {

​	;

}

> Object literal 방식은 object()생성자 함수로 객체를 생성하는 것을 단순화 시킨 short-hand (축약법)이다. 

---

## 생성자 함수 

```javascript
Var _ = {
	name: 'Lee',
  	gender: 'mele',
	sayHello: function () {
    	console.log('문자열' + this.name);
  	}
};


```

