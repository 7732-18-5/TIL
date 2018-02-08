var say = 'Hello';

function print() {
    console.log(say); //Hello
    var say = ' World';
    console.log(say); //World

    function inner_print() {
        console.log(say);
        var say = 'Good'; //Good
        console.log(say);
        say = ' Bye';
        console.log(say); //Bye
    }

    inner_print(); //Bye
}

print(); //Hello