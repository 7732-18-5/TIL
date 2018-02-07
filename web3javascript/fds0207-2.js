// var s = 20;
// var n = 1;
// for(s = 20; s <= 0; s--){
//     s+=(20-(3*n))
//     n++
// }
// console.log(s=Math.abs(s)+n)

var s = 20;
var n = 1;

while(1) {
    s += (20 - (3 * n));
    if (s <= 0) {
        s = Math.abs(s) + n;
        break;
    }
    else {
        n ++;
    }
}
console.log(s)

// var s = 20;

// for(var n = 1;; n++){
//     s += (20 - (3 * n));
//     if(s <= 0){
//     s = Math.abs(s) + n;
//     break;
//     }
// }

// console.log(s)

