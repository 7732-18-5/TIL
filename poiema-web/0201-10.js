var star = '';

for (var i = 0; i < 3; i++) {
    // i = 0 , * 1개
    // i = 1 , * 2개
    // i = 2 , * 3개
    // console.log('*');
    // console.log는 자동으로 개행한다.
    for (var j = 0; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
for (var i = 0; i < 5; i++) {
    // i = 0 , * 1개
    // i = 1 , * 2개
    // i = 2 , * 3개
    // console.log('*');
    // console.log는 자동으로 개행한다.
    for (var j = 0; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);

