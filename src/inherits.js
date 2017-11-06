/**
 * Created by lenovo on 2017/11/6.
 */
const util = require('util');
function A(name, age) {
  this.name = name;
  this.age = age;
}
A.prototype = {
  kk: 20
}

function B(job) {
  this.job = job;
}

B.prototype =  {
  mm: 55
}


var a = new A('mao', '20')
util.inherits(B, A);
var b = new B('jb');
console.log(b.mm)