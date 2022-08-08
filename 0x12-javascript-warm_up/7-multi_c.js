#!/usr/bin/node
/* Script that prints message depending on the number of arguments passed */
const x = process.argv[2];
if (isNaN(x) === true) {
  console.log('Missing number of occurrences');
}
for (let i = 0; i < x; i++) {
  console.log('C is fun');
}
