//동기식 처리 모델(Synchronous processing model)
function func1() {
    console.log('func1');
    func2();
}

function func2() {
    console.log('func2');
    func3();
}

function func3() {
    console.log('func3');
}

func1();

//func1
//func2
//func3

//비동기식 처리 모델(Asynchronous processing model)
function func1() {
    console.log('func1');
    func2(); //1
}

function func2() {
    // console.log('func-2') //case2:2
    setTimeout(function () {
        console.log('func2');//3 //case2:4
    }, 0);

    func3();
}

function func3() {
    console.log('func3');//2 //case2:3
}

func1();

//func1
//func3
//func2