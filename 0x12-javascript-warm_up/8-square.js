#!/usr/bin/node
/* Script that prints message depending on the number of arguments passed */
const h = process.argv[2];
let square = '';
if (isNaN(h) === true) {
  console.log('Missing size');
} else {
  for (let i = 0; i < h; i++) {
    square += 'X';
  }
  for (let i = 0; i < h; i++) {
    console.log(square);
  }
}
