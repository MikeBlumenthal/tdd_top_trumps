const Player = function(name){
  this.name = name;
  this.hand = [];
  this.cardInPlay = [];
  this.categoryInPlay = "strength";
};

Player.prototype.drawTopCard = function () {
    let card;
    card = this.hand.shift();
    this.cardInPlay.push(card);
};

Player.prototype.selectCategory = function (category) {
  this.categoryInPlay = category;
};

module.exports = Player;
