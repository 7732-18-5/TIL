// 13. 소수 찾기
// numberOfPrime 메소드는 정수 n을 매개변수로 입력받는다. 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 함수를 완성하라.

//     소수(素數, prime number)는 양의 약수가 1과 자기 자신 뿐인 1보다 큰 자연수로 정의된다.즉, 1과 자기 자신으로만 나누어지는 수를 의미한다.

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, …

// 예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는[2, 3, 5, 7] 4개가 존재하므로 4를 반환한다.

function numberOfPrime(n) {
    var result = 0;
    for(var i = 1; i <= n; i++) {
        if (numberOfPrime(n)) result++;
    }
    return result;
}

console.log(numberOfPrime(10)); // 4