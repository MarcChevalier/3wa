// 'use strict';
//
// function sayHello() {
//
// 	document.write('<p>Bonjour à toutes et à tous !</p>');
//     document.write('<p>Je suis dev</p>');
//     document.write('<p>Vous devez me payer très cher</p>');
//
// }
//
// sayHello(); // une fois la fonction défini il est possible de l'appeler n'importe où dans le code
// sayHello();
// sayHello();
//
//
//
// function sayHello2(firstName, lastName) {
//
//     document.write('<p>Bonjour ' + firstName + ' ' + lastName + ' !</p>');
//
// // les variables Ne fonctionnent uniquement que dans la fonction
// }
//
// sayHello2('Marie', 'MAYERS');
//
//
//
//
//
//
// function sayHello2(firstName, lastName) {
//
//     document.write('<p>Bonjour ' + firstName + ' ' + lastName + ' !</p>');
//
//
// }
//
// sayHello2('Marie', 'MAYERS');
//
// sayHello2('Ailton', 'CHRISTIAN');
//
//
//
// function addition(num1, num2) {
//
// 	var result = num1 + num2;
//
//     console.log(result);
//
// }
//
// addition(2, 5);
// addition(1, 8);

// function sayHelloReturn() {
//
// 	return 'Bonjour à toutes et à tous !';
//
// }
//
// sayHelloReturn(); ne fonctionne pas si on l\'appelle  comme les autres fonctions il fau l'\appeler comme ceci :

function sayHelloReturn() {

	return 'Bonjour à toutes et à tous !';

}

var hello = sayHelloReturn();

console.log(hello);

function additionReturn(num1, num2) {

	var result = num1 + num2;
	return result;
}

var result = additionReturn(1, 5);
console.log(result);

//natif JS

//push permet de sotcker une donnée dans un tableau au dernier index dispo

var name = ['Gégé', 'Pedro', 'Beber'];

name.push('Cricri'); // ajoute Cricri dans le tableau name

name.indexOf('Gégé'); // renvoie l'index où est stocké la donnée dans le tableau name
					// si pas de donnée renvoie -1 car il n'est pas dans le tableau

name.splice(1, 1): // supprime pedro (argument 1 : index du premier élément à supprimer, argument 2 : nombre d'éléments à supprimer après l'index de l'argument 1
