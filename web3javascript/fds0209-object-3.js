var grades = {
    'list': { 'egoing': 10, 'k8805': 6, 'sorialgi': 80 }
}
console.log(grades['list']);
//{egoing: 10, k8805: 6, sorialgi: 80}

var grades = {
    'list': { 'egoing': 10, 'k8805': 6, 'sorialgi': 80 }
}
console.log(grades['list']['egoing']);
//10

var grades = {
    'list': { 'egoing': 10, 'k8805': 6, 'sorialgi': 80 },
    'show': function () {
        alert('Hello world');
    }
}
grades['show']();
// Hello world

var grades = {
    'list': { 'egoing': 10, 'k8805': 6, 'sorialgi': 80 },
    'show': function () {
        console.log(this.list);
    }
}
grades['show']();

// { 'egoing': 10, 'k8805': 6, 'sorialgi': 80 }

var grades = {
    'list': { 'egoing': 10, 'k8805': 6, 'sorialgi': 80 },
    'show': function () {
        for(var name in this.list) {
            console.log(name, this.list[name]);
        }
    }
}
grades['show'](); // = grades.show();
//egoing: 10
//k8805: 6
//sorialgi: 80
