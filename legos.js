module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

var bst = require('./bst');
const BST = bst.BST;

function Brick(size, color) {
  this.size = size;
  this.color = color;
}

function LegoPile() {
  this.dictionary = {
    "red": new BST(),
    "green": new BST(),
    "blue": new BST(),
    "yellow": new BST(),
    "black": new BST(),
    "white": new BST(),
  }
  this.insert = insert;
  this.hasBrick = hasBrick;
}

function insert(Brick) {
  this.dictionary[Brick.color].insert(Brick);
}

function hasBrick(size, color) {
  var current = this.root;
  while (current) {
    if (size === current.size) {
      return true;
    }
    if (size < current.size) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return false;
}
