/**
 * Created by lenovo on 2017/11/6.
 */
var obj = {
  name: 'mao',
  age: 20
}

var obj2 = Object.create(obj, {
  bar: {
    configurable: true,
    get: function() { return this.__proto__.bar || 30 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
      this.__proto__.bar = value;
    }
  }
});
console.log(obj2)
obj2.bar = 33
console.log(obj2.bar)

console.log(obj2)
obj2.bar = 32
console.log(obj2.bar)


