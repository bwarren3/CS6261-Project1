var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const Pile = lego.LegoPile;
const BST = bst.BST;

describe("LegoPile", function() {
    var pile = new Pile();
    var sampleLego = new Brick(5, "red");
    var bst = new BST();
    pile.insert(sampleLego);

    it('Checking Pile if Has Brick', function() {
      var sampleLegoGreen = new Brick(5, "green");
      pile.insert(sampleLegoGreen);
      var sampleLegoBlue = new Brick(5, "blue");
      pile.insert(sampleLegoBlue);
      var sampleLegoYellow = new Brick(5, "yellow");
      pile.insert(sampleLegoYellow);
      var sampleLegoBlack = new Brick(5, "black");
      pile.insert(sampleLegoBlack);
      var sampleLegoWhite = new Brick(5, "white");
      pile.insert(sampleLegoWhite);
      assert.equal(sampleLego, pile.hasBrick(4, "orange"));
    });

});
