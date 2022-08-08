#!/usr/bin/node
/* function that returns the reversed version of a list */
exports.esrever = function (list) {
  let i;
  const newL = [];
  for (i = list.length - 1; i >= 0; i--) {
    newL.push(list[i]);
  }
  return newL;
};
