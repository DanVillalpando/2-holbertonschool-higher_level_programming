#!/usr/bin/node
/* Script that prints message depending on the number of arguments passed */
function factorial (num) {
  if (num < 2 && num > 0) {
    return (1);
  } else if (num > 1) {
    return (num * factorial(num - 1));
  } else {
    return (1);
  }
}
console.log(factorial(parseInt(process.argv[2])));
