#!/usr/bin/node
/* Script that searches the second biggest integer in the list of arguments */
const len = process.argv.length;
if (len <= 3) {
  console.log(0);
} else {
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (process.argv[j] > process.argv[i]) {
        const bc = process.argv[i];
        process.argv[i] = process.argv[j];
        process.argv[j] = bc;
      }
    }
  }
  console.log(process.argv[3]);
}
