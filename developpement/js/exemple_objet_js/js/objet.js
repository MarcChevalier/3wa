'user strict'

var Perso =  function(name, hp, db, attaque, biere){

  this.name = name,
	this.hp = hp,
	this.db = db,
	this.attaque = attaque,
  this.biere = biere



}

Perso.prototype.boire = function() {

	console.log(this.name+' est rond comme une queue de pelle');
  this.hp -= 1;
  this.biere -= this.db;
}

Perso.prototype.tomber = function() {
	console.log(this.name+' est tombé mais n\'a rien senti');
	this.hp -= 2;

}

Perso.prototype.attack = function(perso) {
  console.log(this.name+' pête un plomb et attaque '+perso.name);

	var random = Math.random();
	console.log(random);

	if(random < 0.5) {
		console.log('Belle droite de bourré');
		perso.hp -= this.attaque;
		console.log(perso.name+ ' a '+perso.hp+ ' hp');
	} else {
		this.tomber();
	}

	console.log(this.name+' lui fait un doigt un tombe dans le comas');

}
