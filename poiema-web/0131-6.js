// 1 ~ 20 의 정수 중, 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
var x = 0;
for (var i = 0; i <= 20; i++) {
    if (i % 3 && i % 2 != 0){
        x+=i;
    }
}
console.log(x);