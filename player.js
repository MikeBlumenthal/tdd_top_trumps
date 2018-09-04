const Player = function(name){
  this.name = name;
  this.hand = [];
  this.cardInPlay = [];
};

Player.prototype.drawTopCard = function () {
    let card;
    card = this.hand.shift();
    this.cardInPlay.push(card);
};

module.exports = Player;
