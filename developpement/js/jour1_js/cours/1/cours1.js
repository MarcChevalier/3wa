
var name = window.prompt('votre nom ?');

if (name == 'Paul') {

	document.write('Vous êtes Paul');

} else if (name == 'Pierre') {

	document.write('Vous êtes Paul');

} else if (name == 'Jacque') {

	document.write('Vous êtes Jacque');

} else if (name == 'Ginette') {

	document.write('Vous êtes Ginette');

} else {

	document.write('Je ne vous connais pas');
}


switch(name) {
	case 'Paul':
  case 'PAUL';
    document.write('Vous êtes Paul');
    break;

    case 'Pierre':
    document.write('Vous êtes Pierre');
    break;

	case 'Jacque':
    document.write('Vous êtes Jacque');
    break;

	case 'Ginette':
    document.write('Vous êtes Ginette');
    break;

    default:
    document.write('Je ne vous connais pas');
    break;
}
