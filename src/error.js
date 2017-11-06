/**
 * Created by lenovo on 2017/11/6.
 */
// function test() {
//   throw new Error('test error');
// }
//
// function main() {
//   setImmediate(() => test());
// }
//
// main();

const qs = require('qs');

let arr = [1,2,3,4];
let str = qs.stringify( {arr});

console.log(str); // arr%5B0%5D=1&arr%5B1%5D=2&arr%5B2%5D=3&arr%5B3%5D=4
console.log(decodeURI(str)); // 'arr[0]=1&arr[1]=2&arr[2]=3&arr[3]=4'
console.log(qs.parse(str)); // { arr: [ '1', '2', '3', '4' ] }