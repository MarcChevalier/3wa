'use strict';

/*
	$('.para').on('click', getData);

    function data()  {

    	var id = $(this).data('id');

    }
*/


var para = document.querySelectorAll('.para');

for (var i =0; i < para.length ; i++) {

	para[i].addEventListener('click', getData);

}

function getData() {

	var id = this.dataset.id
}
// Sortir un id d'une liste
var para = document.querySelectorAll('.para');

for (var i =0; i < para.length ; i++) {

	para[i].addEventListener('click', getData);

}

function getData() {

	var id = this.dataset.id
}


//Requête Ajax permettant de taper dans une api
$.ajax({
    url: "https://api.internationalshowtimes.com/v4/movies/12",
    type: "GET",
    datatype: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
	})
	.done(displayOneMovie) //Fonction de call back
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");

});


//Objet JS Prototype

var Perso = function(name, hp, attack, defense, magie) {

	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.defense = defense;
	this.magie = magie;


}
// instancier the new perso
var gege = new Perso('Gege', 132, 25, 5, 125);
//Prototype


Perso.prototype.boire = function() {

	this.hp -= 5;

}

Perso.prototype.attaquer = function(persobj) {

	persobj.hp -= this.attack;
}



var gege = new Perso('Gege', 132, 25, 5, 125);

gege.boire();

var nanard = new Perso('Nanard', 132, 25, 5, 125);


nanard.attaquer(gege);

var Program = function(){
	this.gege = new Perso('Gégé', 200, 10, 7, 60);
	this.nanard = new Perso('Nanard', 180, 6, 4, 80);



	$('#attaquer').on('click', this.onClickAttaque.bind(this));
	$('#defendre').on('click', this.onClickDefense.bind(this));
	$('#sort').on('click', this.onClickSort.bind(this));




	this.affichage = function() {

		$('#perso1').text(this.gege.name+ ' : '+this.gege.hp+' HP');
		$('#perso2').text(this.nanard.name+ ' : '+this.nanard.hp+' HP');
	}



}
