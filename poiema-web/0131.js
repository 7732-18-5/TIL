// for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (var i = 0; i < 10; i++) {
    if(i%2==0)
    console.log(i);
}
// for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 작은 수부터 문자열로 출력하시오.
var num = '';
for (var i = 0; i < 10; i++) {
    if (i % 2 == 1){
        num += i;
    }
}
console.log(num);
// for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰 수부터 출력하시오.
for (var i = 10; i > 0; i--) {
    if (i % 2 == 1)
        console.log(i);
}
// while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.

var i = 0;

while (i < 10) {
    i++;
    if (i % 2 == 0){
    console.log(i);
    }
}

// while문을 사용하여 0부터 10까지 정수 중에서 홀수만을 작은 수부터 출력하시오.

var i = 0;

while (i < 10) {
    i++;
    if (i % 2 == 1) {
        console.log(i);
    }
}

// for문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
var x =0
for (var i = 0; i < 10; i++) {
    x+=i;
}

console.log(x);

// 1 ~ 20 의 정수 중, 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
var x = 0;
for (var i = 0; i <= 20; i++) {
    if (i % 3 && i % 2 != 0) {
        x += i;
    }
}
console.log(x);