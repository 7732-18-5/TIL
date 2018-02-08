//함수표현식 '변수 호이스팅'
var numbering = function () {
    i = 0;
    while (i < 10) {
        document.write(i);
        i += 1;
    }
}
numbering();
// 함수선언식 '함수 호이스팅'
function numbering () {
    i = 0;
    while (i < 10) {
        document.write(i);
        i += 1;
    }
}
numbering();
//익명함수
(function () {
    i = 0;
    while (i < 10) {
        document.write(i);
        i += 1;
    }
})();
//
var numbering = function (a, b) {
    i = 0;
    while (i < 10) {
        document.write(i);
        i += 1;
    }
};