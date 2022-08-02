#!/usr/bin/node
/* Script that prints message depending on the number of arguments passed */
let n = 0;
process.argv.forEach((val, index) => {
  n++;
});
if (n <= 2) {
  console.log('undefined is undefined');
} else if (n === 3) {
  console.log(process.argv[2] + ' is undefined');
} else {
  console.log(process.argv[2] + ' is ' + process.argv[3]);
}
