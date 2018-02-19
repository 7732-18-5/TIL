//배열 리터럴
var emptyArr = [];

var arr = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];

console.log(emptyArr[1]); // undefined
console.log(arr[1]);      // 'one'
console.log(emptyArr.length); // 0
console.log(arr.length);  // 10
console.log(typeof arr);  // object
console.log(typeof emptyArr); // object
//arr의 프로토타입 객체는 Array.prototype 이다.
//다양한 메소드와 프로퍼티를 제공한다. (sort, length...)


//객체리터럴(유사배열-string)
var obj = { //property name 이 없다.
    '0': 'zero', '1': 'one', '2': 'two',
    '3': 'three', '4': 'four', '5': 'five',
    '6': 'six', '7': 'seven', '8': 'eight',
    '9': 'nine'
};
//obj의 프로토타입 객체는 Object.prototype 이다.

var emptyArr = [];
var emptyObj = {};

console.dir(emptyArr.__proto__);
console.dir(emptyObj.__proto__);

//Array() 생성자 함수
var arr = new Array(2);
console.log(arr.length, arr); // 2 [undefined, undefined]

var arr = new Array(1, 2, 3);
console.log(arr.length, arr); // 3 [1, 2, 3]

//요소 추가
var arr = [];
console.log(arr[0]); // undefined

arr[0] = 'one';
arr[3] = 'three';
arr[7] = 'seven';

console.log(arr);
    // ["one", undefined × 2, "three", undefined × 3, "seven"]

//요소 삭제
var numbersArr = ['zero', 'one', 'two', 'three'];

    // 요소의 값만 삭제된다
delete numbersArr[2]; // ['zero', 'one', undefined, 'three']
console.log(numbersArr);

    // 요소 일부를 삭제 (시작 인덱스, 삭제할 요소수)
numbersArr.splice(2, 1); // ['zero', 'one', 'three']
console.log(numbersArr);

//요소 열거
var numbersArr = ['zero', 'one', 'two', 'three'];
numbersArr.foo = 10;

for (var prop in numbersArr) {
    console.log(prop, numbersArr[prop]);
    // 0 zero / 1 one / 2 two / 3 three / foo 10
}

for (var i = 0; i < numbersArr.length; i++) {
    console.log(i, numbersArr[i]);
    // 0 'zero' / 1 'one' / 2 'two' / 3 'three'
}

// [Array Property]
// Array.length


// [Array Method]

//.isArray()
//.prototype.indexOf()
//.prototype.concat(item ...)
//.prototype.join()
//.prototype.pop()
//.prototype.push(item ...)
//.prototype.reverse()
//.prototype.shift()
//.prototype.slice(start, end)
//.prototype.splice(start, deleteCount, item ...)
//.prototype.sort(comparefunc)

//.prototype.forEach()
var total = 0;
var testArray = [1, 3, 5, 7, 9];

    // forEach 메소드는 원본 배열을 변경하지 않는다.
testArray.forEach(function (item, index, array) {
    console.log('[' + index + '] = ' + item);
    total += item;
});

console.log(total); // 25
console.log(testArray); // [ 1, 3, 5, 7, 9 ]

testArray = [1, 2, 3, 4];

    // 원본 배열을 변경하려면 콜백 함수의 3번째 인자를 사용한다.
testArray.forEach(function (item, index, array) {
    array[index] = Math.pow(item, 2);
});

console.log(testArray); // [ 1, 4, 9, 16 ]

    // forEach 메소드는 for 문과는 달리 break 문을 사용할 수 없다.
[1, 2, 3].forEach(function (item, index, array) {
    console.log('[' + index + '] = ' + item);
    if (item > 1) break; // SyntaxError: Illegal break statement
});