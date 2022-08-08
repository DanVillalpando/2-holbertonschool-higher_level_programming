#!/usr/bin/node
/* Script that prints message depending on the number of arguments passed */
const argum = process.argv[2];
if (isNaN(argum) === true) {
  console.log('Not a number');
} else {
  console.log('My number: ' + argum);
}
