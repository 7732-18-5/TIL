# 1. REST API

| RESTAPI |                |
| ------- | -------------- |
| RE      | presentational |
| S       | tate           |
| T       | ransfer        |
| A       | pplication     |
| P       | rogramming     |
| I       | nterface       |

`REST (Representational State Transfer)`는 'WWW' 과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처의 한 형식이다.

- 구성 요소 상호작용의 규모 확장성(scalability of component interactions)
- 인터페이스의 범용성 (Generality of interfaces)
- 구성 요소의 독립적인 배포(Independent deployment of components)
- 중간적 구성요소를 이용해 응답 지연 감소, 보안을 강화, 레거시 시스템을 인캡슐레이션 (Intermediary components to reduce latency, enforce security and encapsulate legacy systems)
  - **레거시 시스템**(legacy system)은 낡은 기술이나 방법론, 컴퓨터시스템, 소프트 등을 말한다. 이는 현대까지도 남아 쓰이는 기술을 의미하지만, 더이상 쓰이지 않더라도 현대의 기술에 영향을 주는 경우도 포함한다. 

# 1. REST API 중심 규칙

REST에서 가장 중요한 기본적인 규칙은 두 가지이다. URI는 자원을 표현하는 데에 집중하고 행위에 대한 정의는 HTTP Method를 통해 하는 것이 REST한 API를 설계하는 중심 규칙이다.

**1. URI는 정보의 자원을 표현해야 한다.**

리소스명은 동사보다는 명사를 사용한다. URI는 자원을 표현하는데 중점을 두어야 한다. get 같은 행위에 대한 표현이 들어가서는 안된다.

```
# bad
GET /getBooks/1
GET /books/show/1

# good
GET /books/1

```

**2. 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)으로 표현한다.**

```
# bad
GET /books/delete/1

# good
DELETE /books/1

```

# 2. HTTP Method

4가지의 Method(GET, POST, PUT, DELETE)를 사용하여 CRUD를 구현한다.

| Method | Action         | 역할                    |
| ------ | -------------- | ----------------------- |
| GET    | index/retrieve | 모든/특정 리소스를 조회 |
| POST   | create         | 리소스를 생성           |
| PUT    | update         | 리소스를 갱신           |
| DELETE | delete         | 리소스를 삭제           |

# 3. REST API의 구성

REST API는 자원(Resource), 행위(Verb), 표현(Representations)의 3가지 요소로 구성된다. REST는 자체 표현 구조(Self-descriptiveness)로 구성되어 REST API만으로 요청을 이해할 수 있다.

| 구성 요소       | 내용                    | 표현 방법             |
| --------------- | ----------------------- | --------------------- |
| Resource        | 자원                    | HTTP URI              |
| Verb            | 자원에 대한 행위        | HTTP Method           |
| Representations | 자원에 대한 행위의 내용 | HTTP Message Pay Load |

# 4. REST API의 Example

## 4.1 json-server

[json-server](http://poiemaweb.com/json-server)를 사용하여 REST API를 사용하여 보자.

```
$ mkdir rest-api-exam && cd rest-api-exam
$ npm init -y
$ npm install json-server

```

db.json 파일을 아래와 같이 생성한다.

```
{<font></font>
  "books": [<font></font>
    { "id": 1, "title": "html", "author": "Lee" },<font></font>
    { "id": 2, "title": "css", "author": "Kim" },<font></font>
    { "id": 3, "title": "javascript", "author": "Park" }<font></font>
  ]<font></font>
}<font></font>

```

npm script를 사용하여 json-server를 실행한다. 아래와 같이 package.json을 수정한다.

```
{<font></font>
  "name": "rest-api-exam",<font></font>
  "version": "1.0.0",<font></font>
  "description": "",<font></font>
  "scripts": {<font></font>
    "serve": "json-server --watch db.json --port 5000"<font></font>
  },<font></font>
  "dependencies": {<font></font>
    "json-server": "^0.12.0"<font></font>
  }<font></font>
}<font></font>

```

json-server를 실행한다. 포트는 5000을 사용한다.

```
$ npm run serve

```

## 4.2 GET

books 리소스에서 모든 책을 조회(index)한다.

```
$ curl -X GET http://localhost:5000/books
[
  {
    "id": 1,
    "title": "html",
    "author": "Lee"
  },
  {
    "id": 2,
    "title": "css",
    "author": "Kim"
  },
  {
    "id": 3,
    "title": "javascript",
    "author": "Park"
  }
]

```

![get-books](http://poiemaweb.com/img/get-books.png)

[Postman](https://www.getpostman.com/)

```
var req = new XMLHttpRequest();<font></font>
req.open('GET', 'http://localhost:5000/books');<font></font>
req.send();<font></font>
<font></font>
req.onreadystatechange = function (e) {<font></font>
  if (req.readyState === XMLHttpRequest.DONE) {<font></font>
    if(req.status === 200) {<font></font>
      console.log(req.responseText);<font></font>
    } else {<font></font>
      console.log("Error!");<font></font>
    }<font></font>
  }<font></font>
};<font></font>

```

books 리소스에서 특정 책을 조회(retrieve)한다.

```
$ curl -X GET http://localhost:5000/books/1
{
  "id": 1,
  "title": "html",
  "author": "Lee"
}

```

![get-books](http://poiemaweb.com/img/get-books-retrieve.png)

```
var req = new XMLHttpRequest();<font></font>
req.open('GET', 'http://localhost:5000/books/1');<font></font>
req.send();<font></font>
<font></font>
req.onreadystatechange = function (e) {<font></font>
  if (req.readyState === XMLHttpRequest.DONE) {<font></font>
    if(req.status === 200) {<font></font>
      console.log(req.responseText);<font></font>
    } else {<font></font>
      console.log("Error!");<font></font>
    }<font></font>
  }<font></font>
};<font></font>

```

## 4.3 POST

books 리소스에 책을 생성한다.

```
$ curl -X POST http://localhost:5000/books -H "Content-Type: application/json" -d '{"title": "ES6", "author": "Choi"}'
{
  "title": "ES6",
  "author": "Choi",
  "id": 4
}

```

![post-books](http://poiemaweb.com/img/post-books.png)

```
var req = new XMLHttpRequest();<font></font>
req.open('POST', 'http://localhost:5000/books');<font></font>
req.setRequestHeader('Content-type', 'application/json');<font></font>
req.send(JSON.stringify({<font></font>
  title: "ES6",<font></font>
  author: "Choi"<font></font>
}));<font></font>
<font></font>
req.onreadystatechange = function (e) {<font></font>
  if (req.readyState === XMLHttpRequest.DONE) {<font></font>
    if(req.status === 201) {<font></font>
      console.log(req.responseText);<font></font>
    } else {<font></font>
      console.log("Error!");<font></font>
    }<font></font>
  }<font></font>
};<font></font>

```

## 4.4 PUT

books 리소스의 책의 타이틀을 “ES6”에서 “ECMAScript6”로 갱신한다.

```
$ curl -X PUT http://localhost:5000/books/4 -H "Content-Type: application/json" -d '{"title": "ECMAScript6", "author": "Choi"}'
{
  "title": "ECMAScript6",
  "author": "Choi",
  "id": 4
}

```

![put-books](http://poiemaweb.com/img/put-books.png)

```
var req = new XMLHttpRequest();<font></font>
req.open('PUT', 'http://localhost:5000/books/4');<font></font>
req.setRequestHeader('Content-type', 'application/json');<font></font>
req.send(JSON.stringify({<font></font>
  title: 'ecmascript',<font></font>
  author: "Choi"<font></font>
}));<font></font>
<font></font>
req.onreadystatechange = function (e) {<font></font>
  if (req.readyState === XMLHttpRequest.DONE) {<font></font>
    if(req.status === 200) {<font></font>
      console.log(req.responseText);<font></font>
    } else {<font></font>
      console.log("Error!");<font></font>
    }<font></font>
  }<font></font>
};<font></font>

```

## 4.5 DELETE

books 리소스에서 책을 삭제한다.

```
$ curl -X DELETE http://localhost:5000/books/4
{}

```

![delete-books](http://poiemaweb.com/img/delete-books.png)

```
var req = new XMLHttpRequest();<font></font>
req.open('DELETE', 'http://localhost:5000/books/4');<font></font>
req.send();<font></font>
<font></font>
req.onreadystatechange = function (e) {<font></font>
  if (req.readyState === XMLHttpRequest.DONE) {<font></font>
    if(req.status === 200) {<font></font>
      console.log(req.responseText);<font></font>
    } else {<font></font>
      console.log("Error!");<font></font>
    }<font></font>
  }<font></font>
};<font></font>
```