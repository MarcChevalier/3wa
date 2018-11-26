"use strict"

var courses;

courses = new Array();


courses[0] = 'pain';
courses[1] = 'farine';
courses[2] = 'sucre';
courses[3] = 'oeufs';
courses[4] = 'frommage';

// courses.push('lait');
//courses.splice('pain',1);
//courses.splice(0,4);



// document.write(courses);

function ajouter(item) {
  item.push('lait');
}

ajouter(courses);

console.log(courses);



function enlever(item) {
  item.splice(0,1);
}

 enlever(courses);

console.log(courses);


function toutsup(item) {
  item = new Array();
}

toutsup(courses);

console.log(courses + " vide ");

// 2ème méthode (Correction) :
//
// 'use strict';
//
// var shoppingList = new Array();
//
//
// function addItem(item)
// {
// 	shoppingList.push(item);
// }
//
// function displayShoppingList() {
// 	console.log('La liste contient ' + shoppingList.length + ' produit(s).');
// 	console.log(shoppingList);
// }
//
// function removeItem(item){
//
// 	var index = shoppingList.indexOf(item);
//
//     if (index == -1) {
//     	console.log("ERREUR : le produit " + item + " n'existe dans la liste de courses");
//
//     } else {
//
//     	shoppingList.splice(index,1);
//
//     }
//
// }
//
// function removeAllItems()
// {
// 	shoppingList = new Array();
// }
//
// addItem('Fraises');
// addItem('Poulet');
// addItem('Tournevis');
// addItem('Artichaut');
// addItem('couteau pour le chat');
//
// displayShoppingList();
//
// removeItem(window.prompt('Quel produit de la liste de courses souhaitez-vous supprimer ?'));
//
// displayShoppingList();
//
// removeAllItems();
// displayShoppingList();
