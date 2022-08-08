#!/usr/bin/node
/* Script that prints the addition of 2 integers */
function addition (a, b) {
  return a + b;
}
const int1 = parseInt(process.argv[2]);
const int2 = parseInt(process.argv[3]);
console.log(addition(int1, int2));
