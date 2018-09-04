const assert = require('assert');
const Card = require('../card.js');

let card;

beforeEach( function () {
  card = new Card("Batman", 10, 5, 6);
});

describe('Card', function (){
  it('should have a name', function() {
    const actual = card.name;
    assert.strictEqual(actual, "Batman");
  });

  it('should have an intelligence value', function() {
    const actual = card.int;
    assert.strictEqual(actual, 10);
  });

  it('should have a strength value', function() {
    const actual = card.str;
    assert.strictEqual(actual, 5);
  });

  it('should have an agility value', function() {
    const actual = card.agi;
    assert.strictEqual(actual, 6);
  });
  
});
