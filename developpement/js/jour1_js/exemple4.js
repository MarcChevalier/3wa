var name = 'Marc';

document.write('Je m\'appelle ' + name + ' je suis de la PA 121');

var age1 = 30 + ' ans';

var age2 = 40 + ' ans';

var result = age1 + age2;

console.log(result);



var number1;
var number2;

number1 = window.prompt/*agir ,avec l'utilisateur*/("veuillez rentrer un nombre");
number2 = window.prompt('Veuillez entrez un nombre');

number1 = parseInt(number1);
number2 = parseFloat(number2);/*chiffre vargile*/

console.log(number1);


/*

seconde méthode
number1 = parseInt(window.prompt('Veuillez entrez un nombre'));
number2 = parseInt(window.prompt('Veuillez entrez un nombre'));

*/

var result = number1 + number2;

document.write(result);
