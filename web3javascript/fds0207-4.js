var say = 'Hello';

function print() {
    console.log(say); //Hello > undefined
    var say = ' World';
    console.log(say); //World > World

    function inner_print() {
        console.log(say); //World > undefined
        var say = 'Good'; //Good > Good
        console.log(say);
        say = ' Bye';
        console.log(say); //Bye > Bye
    }

    inner_print(); //Bye > undefined
}

print(); //

//?