var str = 'Hello';
var count = 0;
for (var i = 0; i < str.length; i++) {
   if(str[i] === 'l')
    // console.log(str.charAt(i));
    count++;
//    console.log(str[i]);
}
console.log(count);