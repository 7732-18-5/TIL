// 3. 문자열 다루기
// alphaString46 함수는 문자열 s를 매개변수로 입력받는다.s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.예를들어 s가 ‘a234’이면 false를 리턴하고 ‘1234’라면 true를 리턴한다
var str = 0;

function alphaString46(s) {
    if (!s)
        return false;
    if ((s.length >= 4 && s.length <= 6) && !isNaN(s)) {
        return true;
    }
        return false;
}

console.log(alphaString46('과제_4'))
console.log(alphaString46('1234'))
console.log(alphaString46('9014'))
console.log(alphaString46('723'))
console.log(alphaString46('a234'))
console.log(alphaString46(' '))
console.log(alphaString46('NaN'))