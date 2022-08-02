#!/usr/bin/node
/* Script that prints message depending on the number of arguments passed */
let n = 0;
process.argv.forEach((val, index) => {
  n++;
});
if n<= 2) {
  console.log('No argument');
} else if (n === 3) {
  console.log(process.argv[2]);
}
