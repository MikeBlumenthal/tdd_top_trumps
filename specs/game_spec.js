const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');

let card1;
let card2;
let player1;
let player2;
let game;

beforeEach( function () {
  card1 = new Card("Batman", 10, 5, 6);
  card2 = new Card("Superman", 6, 9, 7);
  player1 = new Player("Mike");
  player2 = new Player("Alvaro");
  game =  new Game ([player1, player2], [card1, card2]);
});

describe ('Game', function () {
  it ('should have players', );
  it ('should have a deck of cards');
  it ('should be able to give cards to players');
  it ('should be able to tell who wins');
})
