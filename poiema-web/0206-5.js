// 5. 이상한 문자만들기
// toWeirdCase함수는 문자열 s를 매개변수로 입력받는다. toWeirdCase(s) [i]
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.
// 예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO', 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.

//     주의) 문자열 전체의 짝 / 홀수 인덱스가 아니라 단어(공백을 기준)별로 짝 / 홀수 인덱스를 판단한다.

// function toWeirdCase(s) {

// }

// console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
// console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
// split
// toLowercase i % 2 == 0
// toUppercase

function toWeirdCase(s) {

    var split = s.split('');
    for(var i = 0; i < split.length; i++) {

        if(i % 2 == 0){
            split.toLowerCase();
        }
        else {
            split.toUpperCase();
        }
        return split;
    }
}

console.log(toWeirdCase('hello world'));
console.log(toWeirdCase('my name is lee'));

//

function toWeirdCase(str) {
    var wordArr = str.split(' ');
    // console.log(wordArr); // [ 'hello', 'world' ]

    for (var i = 0; i < wordArr.length; i++) {
        wordArr[i] = toUpperLower(wordArr[i].trim());
    }
    return wordArr.join(' ');
}

function toUpperLower(str) {
    var res = '';
    for (var i = 0; i < str.length; i++) {
        res += i % 2 ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    return res;
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('hello    world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'



