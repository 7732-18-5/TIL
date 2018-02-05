// 4. 문자열 내 p와 y의 개수
// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다.대소문자를 구별하지 않으며 s에 ‘p’의 개수와 ‘y’의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라.‘p’, ‘y’ 모두 하나도 없는 경우는 항상 true를 리턴한다.예를들어 s가 ‘pPoooyY’면 true를 리턴하고 ‘Pyy’라면 false를 리턴한다.

// if else if
// return
// charAt?  toLowerCase? toUpperCase?
// count length

function numPY(s) {
    if(!s) {
        return true;
    }

    var str = s.toLowerCase();
    var pCount = 0;
    var yCount = 0;

    for (var i = 0; i < str.length; i++) {
        if(str[i] === 'p') {
            pCount++;
        }
        else if (str[i] === 'y') {
            yCount++;
        }

    }

    if (pCount === yCount) {
        return true;
    }

    else{
        return false;
    }
}


    // if (str.count('p') === str.count('y')) {
        // return true;
    // }
    // else {
    //     return;
    // }

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true
