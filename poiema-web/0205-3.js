var str = 0;

function alphaString46(s) {

    if(!s) return false;

    if((s.length >= 4 && s.length <= 6) && !isNaN(s)){
    return true;
    }

    return false;
}

console.log(alphaString46('1234'))

console.log(alphaString46('a567'))

console.log(alphaString46('891010'))

console.log(alphaString46(' '))

console.log(alphaString46('NaN'))