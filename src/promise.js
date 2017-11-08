/**
 * Created by lenovo on 2017/11/8.
 */
function pms() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(222);
    }, 1000)
  })
}

pms().then(function() {
  console.log(aaa)
}, function(res) {
  console.log(res);
  console.log(aa);

}).catch(function(err) {
  console.log(err)
  console.log('catch')
})