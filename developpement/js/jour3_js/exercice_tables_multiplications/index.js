'use strict'

// var tab = new Array();
// tab[0] = new Array(1,2,3);
// tab[1] = new Array(4,5,6);
// var number1 = parseFloat(window.prompt('Entrez le chiffre 1'));
// var number2 = parseFloat(window.prompt('Entrez le chiffre 2'));
// var operator;
// var result;
//
// switch(operator) {
// case '*':
// result = number1 * number2;
// document.write(result);
// break;
//
// }
// for(var ligne=0; ligne<tab.length; ++ligne)
//
// if (isNaN(result) == true || isNaN(number1) == true) {
// 	document.write();
// 	result = number1 * number2;
// }
// {
// for(var colonne=0; colonne<tab[ligne].length; ++colonne)
// {
// alert(tab[ligne][colonne]);
// }
//
// document.write(result);
// }
/*

var numberuser = window.prompt('entre un chiffre');

numberuser = parseInt(numberuser);

document.write('<table>');


for (var i = 1; i <= numberuser; i++) {

  document.write('<tr>');

  for (var j = 1; j <= numberuser; j++) {

    var resultat = i * j;
    document.write('<td>' +resultat + '</td>')

  }

  document.write('</tr>');
}

document.write('</table>');









// */
// OK ce code fontionne :



// var size = parseInt(window.prompt('entrez un chiffre'));
//
// document.write('<table>');
//   for(var row = 1; row <= size; row++) {
//     document.write('<tr>');
//     for(var column = 1; column <= size; column++) {
//       var result = row * column;
//       if (row == column) {
//         document.write('<td class="same">'+result+'</td>');
//       } else {
//         document.write('<td>'+result+'</td>');
//       }
//     }
//     document.write('</tr>');
//   }
// document.write('</table>');

//Correction 1er méthode :

'use strict';

var size = parseInt(window.prompt('Taille de la table de multiplications ?'));


document.write('<table>');

	for (var row = 1; row <= size; row ++) {

    	document.write('<tr>');

        for(var column = 1; column <= size; column++) {

        	var result = row * column;

            if (row == column) {

            	document.write('<td class="same">'+ result +'</td>');

            } else {

            	document.write('<td>'+ result +'</td>');

            }


        }

        document.write('</tr>');

    }


document.write('</table>');

// <style> /* ne pas mettre la balise, utiliser le fichier css*/
//
// td {
// 	border: 1px solid purple;
//
// }
//
// .same {
// 	background-color: pink;
//
// }
//
// </style>
