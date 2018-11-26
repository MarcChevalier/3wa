'use strict';   // Mode strict du JavaScript

// var number = nombre.prompt = 0;
// var name = 'Paul';
// var user = wi
//
// do {
//
// 	num ++;
//
// } while (number != 5) // tant que num est différent de 5 la boucle tourne
//
// if (number) {
//   isNaN(number)
// }
// if else {
//   isNaN(name)
// }
// document.write
// // fonctionnalité isNaN()
//
//
//
//
//
// isNaN(number) // renvoie false;
// isNaN(name) // renvoie true;
                       // CORRECTION



                       var number;

                       do {

                       	number = parseFloat(window.prompt('Veuillez saisir un nombre :'));

                       } while (isNaN(number) == true )

                       document.write('<p>Merci, vous avez saisi <strong>' + number + '</strong>.</p>');
