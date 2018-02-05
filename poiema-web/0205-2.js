// 1~10,000의 숫자 중 8이 등장하는 횟수 구하기 (google)
// 1부터 10,000 까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.
// 단, 8 이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8 이라는 숫자를 모두 카운팅 해야 한다. 예를들어 8808은 3, 8888은 4로 카운팅 해야 한다. 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]

// var str = 0;

// for (var i = 0; i <= 10,000; i++) {
//     if (str[i] == str.count(8));

//     console.log(str[i])
// }

function getCount8() {
    var all = '';
    var cnt = 0;

    for (var i = 1; i <= 10000; i++) {
        all += i;
    }

    for (var j = 0; j < all.length; j++) {
        if (all.charAt(j) === '8') cnt++;
    }

    return cnt;
}

console.log(getCount8());