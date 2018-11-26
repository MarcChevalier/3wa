<!DOCTYPE html>
<html>
<head>
	<title>objet</title>
	<meta charset="utf-8">
</head>
<body>

</body>
<script type="text/javascript" src="objet.js"></script>
<script type="text/javascript" src="main.js"></script>
</html>


<script>

// objet.js

var Perso =  function(name, hp, db, attaque, biere){

	this.name = name,
	this.hp = hp,
	this.db = db,
	this.attaque= attaque,
    this.biere = biere

	

}

Perso.prototype.boire = function() {

	console.log(this.name+' est ivre');
    this.hp -= 1;
    this.biere -= this.db;
}


Perso.prototype.tomber = function() {
	console.log(this.name+' est tombé mais n\'a rien senti');
	this.hp -= 2;

}

Perso.prototype.attaquer = function(perso) {

	console.log(this.name+' pête un plomb et attaque '+perso.name);

	var random = Math.random();
	console.log(random);

	if(random < 0.5) {
		console.log('Belle droite de bourré');
		perso.hp -= this.attaque;
		console.log(obj.name+ ' a '+perso.hp+ ' hp');
	} else {
		this.tomber();
	}

	console.log(this.name+' s\'excuse en pleurant');
}

// main.js


var gege = new Perso('Gégé',5, 120, 2, 1800);

console.log(gege.hp);

console.log(gege.biere);

gege.boire();

console.log(gege.hp);

console.log(gege.biere);

var bernard = new Perso('Bernard', 20, 95, 1, 2000);


console.log(bernard.hp);

bernard.tomber();

console.log(bernard.hp);

gege.attaquer(bernard);


</script>









