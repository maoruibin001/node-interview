/**
 * Created by lenovo on 2017/11/6.
 */
const fs = require('fs');
const path = require('path');

// console.log(__dirname)
var dirs = fs.readdirSync('../example');

dirs = dirs.map((e, i) => {
  console.log((e))
  return path.basename(e);
})

console.log(dirs);