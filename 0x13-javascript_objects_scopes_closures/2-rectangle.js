#!/usr/bin/node
/* empty class Rectangle that defines a rectangle */
class Rectangle {
  constructor (w, h) {
    if (((w = parseInt(w)) && (h = parseInt(h))) > 0) {
      this.width = w;
      this.height = h;
    }
  }
}

module.exports = Rectangle;
