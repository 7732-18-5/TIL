function numbering() {
    document.write(1);
}
numbering();
numbering;
// 변수 선언, 변수 사용방법
// var a = 1;
// alert(a);
// 함수 호출 방법
// numbering 뒤에 ()가 없다면 함수가아닌  변수라고 인식 할 것이다.

//
function numbring() {
    i = 0 ;
    while(i < 10) {
        document.write(i);
        i += 1;
    }
}
numbring();