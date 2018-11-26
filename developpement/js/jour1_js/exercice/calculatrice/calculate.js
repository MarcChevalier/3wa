'use strict'

var number1 = parseFloat(window.prompt('Entrez le chiffre 1'));
var number2 = parseFloat(window.prompt('Entrez le chiffre 2'));
var operator = window.prompt('Entrez votre opérateur');
var result;

switch(operator) {
case '+':
result = number1 + number2;
document.write('+');
break;

case '-':
result = number1 - number2;
document.write('-');
break;

case '*':
result = number1 * number2;
document.write('*');
break;

case '/':
    case 'division':
    if (number2 == 0) {
    	document.write('<p>Erreur : vous ne pouvez pas diviser un nombre par 0 !</p>');
        break;
    }

    result = number1 / number2;
    break;

    case '^':
    case 'puissance':
    result = number1 ** number2;
    break;

	default:
    document.write("<p>Erreur : vous avez indiqué une opération inconnue !</p>");
    break;
}

if (isNaN(result) == true || isNaN(number1) == true) {
	document.write("<p>Vous n'avez pas saisi deux nombres !</p>");
	result = undefined;
}


if(result != undefined)
{
	document.write("<p>Le résultat de l'opération est <strong>" + result + '</strong>.</p>');
}
