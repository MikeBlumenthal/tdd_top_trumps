const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

let card1;
let card2;
let player;

beforeEach( function(){
  card1 = new Card("Batman", 10, 5, 6);
  card2 = new Card("Superman", 6, 9, 7);
  player = new Player("Mike");
});

describe( 'Player', function(){
  it("should have a name", function(){
    const actual= player.name;
    assert.strictEqual(actual, "Mike");
  });

  it("should have a hand of cards", function(){
    const actual = player.hand;
    assert.deepStrictEqual(actual, []);
  });

  it("should be able to draw the top card", function(){
    player.hand = [card1, card2];
    player.drawTopCard();
    const actual = player.cardInPlay;
    assert.deepStrictEqual( actual, [card1] );
  });

  it("should be able to select a category on the card in play", function(){
    player.cardInPlay = [card1];
    player.selectCategory('strength');
    const actual = player.categoryInPlay;
    assert.strictEqual( actual, 'strength' );
  });

} );
