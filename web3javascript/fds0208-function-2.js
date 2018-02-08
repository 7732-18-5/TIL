function get_member1() {
    return 'egoing';
}

function get_member2() {
    return 'k8805';
}

alert(get_member1());
alert(get_member2());

//return ; 뒤에 입력된 값은 작용하지 않는다.

function get_member() {
    return 'egoing';
    return 'k8805';
    return 'sorialgi';
}
alert(get_member());