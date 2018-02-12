function cal(func, num) {
    return func(num)
}
function increase(num) {
    return num + 1
}
function decrease(num) {
    return num - 1
}
alert(cal(increase, 1));
alert(cal(decrease, 1));